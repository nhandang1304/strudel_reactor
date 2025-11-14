export function RemoveInstrument(muteInstr, codeText) {
    
    let newCode = codeText;

    if (muteInstr.drum) {
        newCode = newCode.replace(/<p1_Radio>drums:[\s\S]*?(?=(\n\w+:|$))/g, '');
    }
    if (muteInstr.baseline) {
        newCode = newCode.replace(/baseline:[\s\S]*?(?=(\n\w+:|$))/g, '');
    }
    if (muteInstr.square) {
        newCode = newCode.replace(/main_arp:[\s\S]*?(?=(\n\w+:|$))/g, '');
    }

    return newCode;
}
export default RemoveInstrument