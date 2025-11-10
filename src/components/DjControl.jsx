import ProcessText from "./ProcessTextLogic";
function DjControl() {

    function muteInstrument(instr) {
        let proc_text = document.getElementById('proc').value
        let proc_text_replaced = proc_text.replaceAll(instr, ProcessText);
    }
    return (
        <>
            
            <div className="form-check form-switch">
                <input onchange={() => { muteInstrument("<drum>") }} className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="fw-bold text-light" htmlFor="flexRadioDefault1">
                    
                    Drum  
                    
                </label> 
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="radio" name="flexRadioDefault"  />
                <label className="fw-bold text-light" htmlFor="flexRadioDefault2">
                    
                    Guitar  
                    
                </label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="fw-bold text-light" htmlFor="flexRadioDefault2">
                   
                    Piano  
                    
                </label>
            </div>
        </>
              
    )
}

export default DjControl