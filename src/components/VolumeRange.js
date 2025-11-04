import { FaVolumeUp } from "react-icons/fa";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Destination } from "tone";

function VolumeRange() {
    const [mutedSound, setMutedSound] = useState(false);
    const [volumeValue, setVolumeValue] = useState(0.5); // 0 -> 1

    // Cập nhật volume khi slider thay đổi (không muted)
    useEffect(() => {
        if (!mutedSound) {
            const dB = volumeValue === 0 ? -Infinity : 20 * Math.log10(volumeValue);
            Destination.volume.value = dB;
        }
    }, [volumeValue, mutedSound]);

    // Mute / Unmute logic
    function toggleMute() {
        setMutedSound(prev => {
            const newMuted = !prev;
            if (newMuted) {
                Destination.volume.value = -Infinity; // mute
            } else {
                const dB = volumeValue === 0 ? -Infinity : 20 * Math.log10(volumeValue);
                Destination.volume.value = dB; // restore
            }
            return newMuted;
        });
    }

    function handleSliderChange(e) {
        const value = parseFloat(e.target.value);
        setVolumeValue(value);
        if (value === 0) setMutedSound(true);
        else if (mutedSound) setMutedSound(false);
    }

    return (
        <div className="row align-items-center">
            <div className="col-auto">
                {mutedSound ? (
                    <IoVolumeMuteSharp
                        size={24}
                        style={{ cursor: "pointer" }}
                        onClick={toggleMute}
                        color="black"
                    />
                ) : (
                    <FaVolumeUp
                        size={24}
                        style={{ cursor: "pointer" }}
                            onClick={toggleMute}
                            color="black"
                    />
                )}
            </div>
            <div className="col">
                <input
                    type="range"
                    className="form-range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volumeValue}
                    onChange={handleSliderChange}
                />
            </div>
        </div>
    );
}

export default VolumeRange;
