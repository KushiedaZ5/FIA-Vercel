import os
import shutil
import re

src_base = r"C:\Users\WinterOS27-06-25\Desktop\ExamenesNuevosPorOrganizar 2103 fin\ExamenesNuevosPorOrganizar 2103"
dest_base = r"C:\Users\WinterOS27-06-25\Desktop\calculadorafiausmp\Calculadora Update V0.9.0\pdfs"
js_file = r"C:\Users\WinterOS27-06-25\Desktop\calculadorafiausmp\Calculadora Update V0.9.0\data\examenes-data.js"

def get_course_key(folder):
    if "(IE)" in folder: return "IE"
    if "(ED)" in folder: return "ED"
    if "(L)" in folder: return folder.replace("(L)", "").strip()
    return folder.strip()

updates = {}
total_copied = 0

for root, dirs, files in os.walk(src_base):
    for f in files:
        if f.lower().endswith('.pdf'):
            folder_name = os.path.basename(root)
            if folder_name in ["AHF", "Charlie", "Mariano", "Vir"]: continue
            course_key = get_course_key(folder_name)
            base_name = f[:-4]
            # Rule: rename "FINAL" to "EF"
            if base_name.startswith("FINAL"): base_name = base_name.replace("FINAL", "EF")
            if "-" not in base_name: continue
            tipo, ciclo = base_name.split("-", 1)
            
            if course_key not in updates: updates[course_key] = {}
            if tipo not in updates[course_key]: updates[course_key][tipo] = set()
            updates[course_key][tipo].add(ciclo)
            
            dest_dir = os.path.join(dest_base, course_key)
            os.makedirs(dest_dir, exist_ok=True)
            dest_path = os.path.join(dest_dir, f"{base_name}.pdf")
            shutil.copy2(os.path.join(root, f), dest_path)
            print(f"[{total_copied+1}] Copied: {course_key}/{base_name}.pdf")
            total_copied += 1

print(f"Total files copied: {total_copied}")

with open(js_file, "r", encoding="utf-8") as f:
    js_content = f.read()

def merge_updates(content, updates):
    new_content = content
    for course, tipos in updates.items():
        # Match the course block taking into account optional comments before it
        course_regex = re.compile(rf"'{course}':\s*{{(.*?)}}", re.DOTALL)
        match = course_regex.search(new_content)
        if match:
            # Course exists
            block = match.group(1)
            new_block = block
            for tipo, ciclos in tipos.items():
                tipo_regex = re.compile(rf"'{tipo}':\s*\[(.*?)\]")
                tipo_match = tipo_regex.search(new_block)
                if tipo_match:
                    # Type exists
                    arr_str = tipo_match.group(1)
                    existing = [x.strip().strip("'").strip('"') for x in arr_str.split(',') if x.strip()]
                    for c in ciclos:
                        if c not in existing:
                            existing.append(c)
                    new_arr_str = ", ".join(f"'{x}'" for x in sorted(existing))
                    new_block = new_block[:tipo_match.start(1)] + new_arr_str + new_block[tipo_match.end(1):]
                else:
                    # Type doesn't exist, append to block
                    ciclos_str = ", ".join(f"'{c}'" for c in sorted(ciclos))
                    new_line = f"        '{tipo}': [{ciclos_str}],"
                    # Safely append
                    if new_block.strip() and not new_block.rstrip().endswith(','): 
                        new_block = new_block.rstrip() + ",\n"
                    new_block = new_block.rstrip() + "\n" + new_line + "\n    "
            new_content = new_content[:match.start(1)] + new_block + new_content[match.end(1):]
        else:
            # Course doesn't exist, append before `};` at the end
            block_str = f"    '{course}': {{"
            for tipo, ciclos in tipos.items():
                ciclos_str = ", ".join(f"'{c}'" for c in sorted(ciclos))
                block_str += f"\n        '{tipo}': [{ciclos_str}],"
            block_str += "\n    },"
            
            closing_idx = new_content.find("\n};\n\n/**")
            if closing_idx != -1:
                new_content = new_content[:closing_idx] + "\n" + block_str + new_content[closing_idx:]
            else:
                closing_idx = new_content.rfind("\n};")
                if closing_idx != -1:
                    new_content = new_content[:closing_idx] + "\n" + block_str + new_content[closing_idx:]
                else:
                    new_content += "\n" + block_str + "\n};\n"
                
    return new_content

updated_js = merge_updates(js_content, updates)

with open(js_file, "w", encoding="utf-8") as f:
    f.write(updated_js)

print("examenes-data.js updated successfully with new data.")
