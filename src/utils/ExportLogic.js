

export function Export(setPlayingAudio, globalEditor, setPause, context) {
    if (!globalEditor) return;

    
    const raw = document.getElementById('proc').value;

    const data = { code: raw };
    // Convert the object to pretty JSON string
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "StrudelCode.json";
    // Add the link to the DOM and trigger a click to start download
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}


export function Import(setPlayingAudio, globalEditor, setPause, context) {
    function handleFile(e) {
        const file = e.target.files[0];
        file.text().then((text) => {
            // Parse the JSON text
          const json = JSON.parse(text);
            document.getElementById('proc').value = json.code;
            // Clear the file input value so the same file can be selected again if needed
            e.target.value = "";
            console.log("Imported JSON:", json);

        });
    };

    return handleFile;
}