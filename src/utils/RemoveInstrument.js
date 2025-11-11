export function removeInstrument(codeText, instrumentName) {
    const pattern = new RegExp(
        `${instrumentName}:([\\s\\S]*?)(?=(\\n\\w+:|\\n<p1_Radio>|//|$))`,
        "g"
    );
    return codeText.replace(pattern, "");
}
export default removeInstrument;