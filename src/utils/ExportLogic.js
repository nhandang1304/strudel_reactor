import { Proc } from "./ProcAudioLogic";

export default function Export(globalEditor, setPause, context) {
    if (!globalEditor) return;

    const data = Proc(globalEditor, setPause, context);
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