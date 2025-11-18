

export function Export(setPlayingAudio, globalEditor, setPause, context) {
    if (!globalEditor) return;

    
    const raw = document.getElementById('proc').value;

    const data = { code: raw };

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "StrudelCode.json";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}


export function Import(setPlayingAudio, globalEditor, setPause, context) {
    function handleFile(e) {
        const file = e.target.files[0];
        const content = document.getElementById('proc').value;
        

        file.text().then((text) => {
          const json = JSON.parse(text);
            document.getElementById('proc').value = json.code;
            
            e.target.value = "";
            console.log("Imported JSON:", json);

        });
    };

    return handleFile;
}