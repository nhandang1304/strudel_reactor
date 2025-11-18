function updateCodeVolume(codeText, volume) {
    if (volume < 0) volume = 0;
    if (volume > 1) volume = 1;

    const vol = volume.toFixed(3);

    return codeText
        // Replace code patterns that set volume using mouseX.range(...) to a fixed volume
        .replace(
            /all\(x\s*=>\s*x\.gain\(mouseX\.range\(\s*[0-9.]+\s*,\s*[0-9.]+\s*\)\s*\)\)/g,
            `all(x => x.gain(${vol}))`
        )
        // Replace code patterns that set volume using a fixed number to new volume
        .replace(
            /all\(x\s*=>\s*x\.gain\(\s*[0-9.]+\s*\)\)/g,
            `all(x => x.gain(${vol}))`
        );
}

export default updateCodeVolume;
