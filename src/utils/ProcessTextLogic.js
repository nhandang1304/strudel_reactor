function toggleMuteBlock(code, instr) {
  const blocks = {
    drum1: "drums:",
    drum2: "drums2:"
  };

  const blockLabel = blocks[instr];
  if (!blockLabel) return code;

  // Tìm vị trí dòng bắt đầu block
  const lines = code.split("\n");
  let startIndex = lines.findIndex(line => line.trimStart().startsWith(blockLabel));
  if (startIndex === -1) return code;

  let openBrackets = 0;
  let foundOpen = false;
  let endIndex = -1;

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];

    for (const ch of line) {
      if (ch === '(') {
        openBrackets++;
        foundOpen = true;
      } else if (ch === ')') {
        openBrackets--;
      }
    }

    if (foundOpen && openBrackets === 0) {
      endIndex = i;
      break;
    }
  }

  if (endIndex === -1) return code; 


  const blockLines = lines.slice(startIndex, endIndex + 1);
  const isCommented = blockLines.every(line => line.trimStart().startsWith("//"));

  for (let i = startIndex; i <= endIndex; i++) {
    if (isCommented) {
     
      lines[i] = lines[i].replace(/^\s*\/\/\s?/, "");
    } else {
      
      const indentMatch = lines[i].match(/^\s*/);
      const indent = indentMatch ? indentMatch[0] : "";
      lines[i] = indent + "// " + lines[i].trimStart();
    }
  }

  return lines.join("\n");
}
export default toggleMuteBlock