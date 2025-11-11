export default function SpeedLogic(speed, globalEditor, proc_text) {
    if (!proc_text) return "";

    let lines = proc_text.split('\n');

    let hasSetcps = false;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().startsWith('setcps(')) {
            
          lines[i] = `setcps(${speed === 1 ? '140/60/4' : `(140/60/4)*${speed}`})`;
            hasSetcps = true;
            break;
        }
    }

    if (!hasSetcps) {
        lines.unshift('setcps((120/60/4))');
    }

    const newCode = lines.join('\n');

    const procEl = document.getElementById("proc");
    if (procEl) procEl.value = newCode;

  
    if (globalEditor && typeof globalEditor.setCode === "function") {
        globalEditor.setCode(newCode);
    }

    return newCode;
}