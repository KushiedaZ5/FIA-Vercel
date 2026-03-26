import os
import re
import shutil

js_path = r"C:\Users\WinterOS27-06-25\Desktop\calculadorafiausmp\Calculadora Update V0.9.0\data\examenes-data.js"
pdfs_path = r"C:\Users\WinterOS27-06-25\Desktop\calculadorafiausmp\Calculadora Update V0.9.0\pdfs"

# Step 1. Fix known misnamed folders like ISAL -> ISE
if os.path.exists(os.path.join(pdfs_path, "ISAL")):
    for f in os.listdir(os.path.join(pdfs_path, "ISAL")):
        src = os.path.join(pdfs_path, "ISAL", f)
        dst = os.path.join(pdfs_path, "ISE", f)
        os.makedirs(os.path.join(pdfs_path, "ISE"), exist_ok=True)
        shutil.move(src, dst)
    os.rmdir(os.path.join(pdfs_path, "ISAL"))

# Step 2: Fix physical files with spaces or weird chars 
for root, dirs, files in os.walk(pdfs_path):
    for filename in files:
        if filename.endswith(".pdf") and " " in filename:
            new_name = filename.replace(" ", "_").replace("_R.pdf", "R.pdf")
            os.rename(os.path.join(root, filename), os.path.join(root, new_name))

# Step 3: Re-read actual files
actual_files = set()
for root, dirs, files in os.walk(pdfs_path):
    for filename in files:
        if filename.endswith(".pdf") and "ppts" not in root.lower() and "old" not in root.lower() and "NO" not in root.upper():
            rel_dir = os.path.relpath(root, pdfs_path).replace("\\", "/")
            if rel_dir == "." or "/" in rel_dir: continue # ensure it's exactly 1 level deep (course/file)
            actual_files.add(f"{rel_dir}/{filename}")

# Step 4: Parse JS expected files
with open(js_path, "r", encoding="utf-8") as f:
    content = f.read()

expected_files = set()
course_pattern = re.compile(r"'([A-Z0-9a-z_]+)':\s*{([^}]*)}", re.DOTALL)
type_pattern = re.compile(r"'([A-Z0-9_]+)':\s*\[(.*?)\]", re.DOTALL)

for match in course_pattern.finditer(content):
    course = match.group(1)
    block = match.group(2)
    for type_match in type_pattern.finditer(block):
        tipo = type_match.group(1)
        cycles = re.findall(r"'([^']+)'", type_match.group(2))
        cycles += re.findall(r'"([^"]+)"', type_match.group(2))
        for c in cycles:
            expected_files.add(f"{course}/{tipo}-{c}.pdf")

ghosts = expected_files - actual_files
unreg = actual_files - expected_files

print(f"Ghosts to delete: {len(ghosts)}")
print(f"Unregistered to add: {len(unreg)}")

# Step 5: Start mutating JS content
def remove_ghost(content, course, tipo, ciclo):
    course_re = re.compile(rf"('{course}':\s*{{)([^}}]*)(}})", re.DOTALL)
    cmatch = course_re.search(content)
    if not cmatch: return content
    block = cmatch.group(2)
    
    type_re = re.compile(rf"('{tipo}':\s*\[)(.*?)(\])", re.DOTALL)
    tmatch = type_re.search(block)
    if not tmatch: return content
    
    arr_str = tmatch.group(2)
    
    # Remove the exact string + optional commas. Need robust regex substitution.
    new_arr = re.sub(rf"['\"]{re.escape(ciclo)}['\"]\s*,?", "", arr_str).strip()
    if new_arr.endswith(','): new_arr = new_arr[:-1].strip()
    
    new_block = block[:tmatch.start(2)] + new_arr + block[tmatch.end(2):]
    new_block = re.sub(rf"\s*'{tipo}':\s*\[\s*\],?", "", new_block) # Optional clean up empty arrs
    
    return content[:cmatch.start(2)] + new_block + content[cmatch.end(2):]

def add_unreg(content, course, tipo, ciclo):
    course_re = re.compile(rf"('{course}':\s*{{)([^}}]*)(}})", re.DOTALL)
    cmatch = course_re.search(content)
    
    if cmatch:
        block = cmatch.group(2)
        type_re = re.compile(rf"('{tipo}':\s*\[)(.*?)(\])", re.DOTALL)
        tmatch = type_re.search(block)
        if tmatch:
            arr_str = tmatch.group(2).strip()
            if arr_str and not arr_str.endswith(','): arr_str += ", "
            elif arr_str: arr_str += " "
            arr_str += f"'{ciclo}'"
            new_block = block[:tmatch.start(2)] + arr_str + block[tmatch.end(2):]
        else:
            new_line = f"\n        '{tipo}': ['{ciclo}'],"
            new_block = block.rstrip()
            if not new_block.endswith(","): new_block += ","
            new_block += new_line + "\n    "
            
        return content[:cmatch.start(2)] + new_block + content[cmatch.end(2):]
    else:
        new_course = f"\n    '{course}': {{\n        '{tipo}': ['{ciclo}'],\n    }},"
        # Find closing };
        idx = content.rfind("\n};\n\n/**")
        if idx != -1: return content[:idx] + new_course + content[idx:]
        idx = content.rfind("\n};")
        if idx != -1: return content[:idx] + new_course + content[idx:]
        return content + new_course + "\n};\n"

for g in ghosts:
    if "-" not in g: continue
    course, filename = g.split("/")
    tipo, ciclo_ext = filename.split("-", 1)
    ciclo = ciclo_ext[:-4]
    content = remove_ghost(content, course, tipo, ciclo)

for u in unreg:
    if "-" not in u: continue
    course, filename = u.split("/")
    tipo, ciclo_ext = filename.split("-", 1)
    ciclo = ciclo_ext[:-4]
    content = add_unreg(content, course, tipo, ciclo)

with open(js_path, "w", encoding="utf-8") as f:
    f.write(content)

print("examenes-data.js has been perfectly synchronized with the physical files!")
