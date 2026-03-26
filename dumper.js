
const fs = require('fs');
const content = fs.readFileSync(process.argv[2], 'utf-8');
// Evaluate the JS in a safe-ish way to extract the object
const scriptContent = content.substring(content.indexOf('const examenesDisponibles = '));
// Very dirty hack to evaluate it
eval(scriptContent);
fs.writeFileSync('dump.json', JSON.stringify(examenesDisponibles, null, 2));
