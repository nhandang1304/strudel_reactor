function updateCodeVolume(codeText, volume) {
    if (volume < 0) volume = 0;
    if (volume > 1) volume = 1;

    const vol = volume.toFixed(3);

    return codeText
       
        .replace(
            /all\(x\s*=>\s*x\.gain\(mouseX\.range\(\s*[0-9.]+\s*,\s*[0-9.]+\s*\)\s*\)\)/g,
            `all(x => x.gain(${vol}))`
        )
    
        .replace(
            /all\(x\s*=>\s*x\.gain\(\s*[0-9.]+\s*\)\)/g,
            `all(x => x.gain(${vol}))`
        );
}

export default updateCodeVolume;
