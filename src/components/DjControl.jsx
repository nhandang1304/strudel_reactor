import { Proc, ProcAndPlay } from "../utils/ProcAudioLogic";
import toggleMuteBlock from "../utils/ProcessTextLogic"
import { useState } from "react";
function DjControl({
    volume,
    setCurrentMelody,
    setPlayingAudio,
    playingAudio,
    speed,
    pause,
    globalEditor,
    setPause,
    context,
    setEditorContent, 
}) {
    const [muteStates, setMuteStates] = useState({
        drum1: false,
        drum2: false,
    });

    async function handleMute(instr) {
        if (!globalEditor.current || typeof globalEditor.current !== "string") {
            console.error("Editor content invalid");
            return;
        }

        // Toggle trạng thái mute của instrument
        const newMuteState = !muteStates[instr];

        // Toggle comment/uncomment trong code
        const newCode = toggleMuteBlock(globalEditor.current, instr);

        // Cập nhật trạng thái mute
        setMuteStates((prev) => ({ ...prev, [instr]: newMuteState }));

        // Cập nhật code trong editor (bạn phải có cách set code trong editor, ví dụ)
        if (setEditorContent) {
            setEditorContent(newCode);
        } else {
            // Nếu không có, update trực tiếp globalEditor.current (không phải lúc nào cũng hiệu quả)
            globalEditor.current = newCode;
        }

        // Gọi Proc hoặc ProcAndPlay với code mới
        if (!playingAudio) {
            Proc(setPlayingAudio, newCode, setPause, setCurrentMelody, context, speed, volume, instr);
        } else {
            ProcAndPlay(setPlayingAudio, newCode, setPause, setCurrentMelody, context, speed, volume, instr);
        }
    }

    return (
        <>
            <div className="form-check form-switch">
                <input
                    checked={muteStates.drum1}
                    onChange={() => handleMute("drum1")}
                    className="form-check-input"
                    type="checkbox"
                    id="toggleDrum1"
                />
                <label className="fw-bold text-light" htmlFor="toggleDrum1">
                    Hihat Drum
                </label>
            </div>

            <div className="form-check form-switch">
                <input
                    checked={muteStates.drum2}
                    onChange={() => handleMute("drum2")}
                    className="form-check-input"
                    type="checkbox"
                    id="toggleDrum2"
                />
                <label className="fw-bold text-light" htmlFor="toggleDrum2">
                    Groove Drum
                </label>
            </div>
        </>
    );
}

export default DjControl;
