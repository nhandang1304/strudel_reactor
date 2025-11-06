function SpeedLogic(globalEditor, speed) {
    let proc_text = document.getElementById('proc').value;
    let newCode;
    if (proc_text.trim().startsWith("fast(")) {
        
        newCode = proc_text.replace(/^fast\(\d+,?/, '').slice(0, -1); 
        newCode = `fast(${speed}, ${newCode})`;
    } else {
        newCode = `fast(${speed}, ${proc_text})`;
    }

    globalEditor.setValue(newCode);
};

export default SpeedLogic