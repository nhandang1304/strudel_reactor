import { FaVolumeUp } from "react-icons/fa";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import updateCodeVolume from "../utils/VolumeLogic";
import { Proc, ProcAndPlay } from "../utils/ProcAudioLogic"
function VolumeRange({ setVolumeAu, setCurrentMelody, setPlayingAudio, playingAudio, globalEditor, setPause, context, speed }) {

    const [mutedSound, setMutedSound] = useState(false);
    const [volumeValue, setVolume] = useState(0.5);

    // Toggle mute/unmute
    function toggleMute() {
        if (mutedSound) {
            setMutedSound(false);
            // Unmute to default volume 0.5
            setVolume(0.5);
            setVolumeAu(0.5);
            if (playingAudio) {
                ProcAndPlay(setPlayingAudio, globalEditor.current, setPause, setCurrentMelody, context, speed, 0.5);
            }
            else {
                Proc(setPlayingAudio, globalEditor.current, setPause, setCurrentMelody, context, speed, 0.5);
            }
        } else {
            
            setMutedSound(true);
            setVolume(0);
            setVolumeAu(0);
            if (!playingAudio) {
                Proc(setPlayingAudio, globalEditor.current, setPause, setCurrentMelody, context, speed, 0);
            }
            else {
                ProcAndPlay(setPlayingAudio, globalEditor.current, setPause, setCurrentMelody, context, speed, 0);
            }
        }
    }
    // Handle slider volume change
    function handleSliderChange(e) {
        const value = parseFloat(e.target.value);
        console.log("Slide:" + value)
        setVolume(value);
        setVolumeAu(value);
        console.log("playingAu: " + playingAudio)
        if (playingAudio) {
            ProcAndPlay(setPlayingAudio, globalEditor.current, setPause, setCurrentMelody, context, speed, value)
        }
        else {
            Proc(setPlayingAudio, globalEditor.current, setPause, setCurrentMelody, context, speed, value);
        }

        // Sync mute state with slider value
        if (value === 0 && !mutedSound) setMutedSound(true);
        if (value > 0 && mutedSound) setMutedSound(false);
    }

    return (
        <div className="row align-items-center">
            <div className="col-auto">
                {mutedSound ? (
                    <IoVolumeMuteSharp
                        size={24}
                        style={{ cursor: "pointer" }}
                        onClick={toggleMute}
                        color="white"
                    />
                ) : (
                    <FaVolumeUp
                        size={24}
                        style={{ cursor: "pointer" }}
                            onClick={toggleMute }
                        color="white"
                    />
                )}
            </div>
            <div className="col">
                <input
                    type="range"
                    className="form-range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={volumeValue}
                    onChange={(handleSliderChange)}
                />
            </div>
        </div>
    );
}

export default VolumeRange;
