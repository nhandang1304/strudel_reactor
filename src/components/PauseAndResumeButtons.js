
function PauseAndResumeButtons({pause, setPause, pauseAudio}) {
    return (
        <>
            <button onClick={pauseAudio} className="btn btn-outline-warning">
                
                {pause ? " Resume" : " Pause"}
            </button>
           
        </>

    )
    
}
export default PauseAndResumeButtons;