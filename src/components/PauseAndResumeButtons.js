
function PauseAndResumeButtons({pause, setPause, pauseAudio}) {
    return (
        <>
            <button id="pause" onClick={pauseAudio} className="btn btn-outline-warning" >{pause ? "Resume" : "Pause" }</button>
           
        </>

    )
    
}
export default PauseAndResumeButtons;