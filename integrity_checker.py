import os
import re

js_path = r"C:\Users\WinterOS27-06-25\Desktop\calculadorafiausmp\Calculadora Update V0.9.0\data\examenes-data.js"
pdfs_path = r"C:\Users\WinterOS27-06-25\Desktop\calculadorafiausmp\Calculadora Update V0.9.0\pdfs"

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
        cycles_str = type_match.group(2)
        
        cycles = re.findall(r"'([^']+)'", cycles_str)
        cycles += re.findall(r'"([^"]+)"', cycles_str)
        
        for c in cycles:
            expected_files.add(f"{course}/{tipo}-{c}.pdf")

actual_files = set()
for root, dirs, files in os.walk(pdfs_path):
    for filename in files:
        if filename.endswith(".pdf"):
            rel_dir = os.path.relpath(root, pdfs_path)
            rel_dir = rel_dir.replace("\\", "/")
            if rel_dir == ".": continue
            actual_files.add(f"{rel_dir}/{filename}")

ghost_entries = expected_files - actual_files
unregistered = actual_files - expected_files

with open("integrity_report.txt", "w", encoding="utf-8") as f:
    f.write("GHOST ENTRIES (In JS, but missing physical PDF -> CAUSES 404):\n")
    for x in sorted(list(ghost_entries)): f.write(x + "\n")
    f.write("\nUNREGISTERED FILES (Physical PDF exists, but not in JS -> INVISIBLE IN UI):\n")
    for x in sorted(list(unregistered)): f.write(x + "\n")

print(f"Written to integrity_report.txt. Found {len(ghost_entries)} ghosts and {len(unregistered)} unregistered.")
