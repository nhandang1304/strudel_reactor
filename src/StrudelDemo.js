import './App.css';
import { useEffect, useRef, useState } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch, { getD3Data } from './console-monkey-patch';
import DjControl from "./components/DjControl";
import PlayButtons from "./components/PlayButtons";
import ProcButtons from "./components/ProcButtons";
import PreprocessTextarea from "./components/PreprocessTextarea";
import VolumeRange from "./components/VolumeRange";
import PauseAndResumeButton from "./components/PauseAndResumeButtons";
import CardMangingFiles from "./components/CardManagingFiles";
import { Proc } from "./utils/ProcAudioLogic";
import pauseAudio from "../src/utils/PauseAndResumeLogic";
import FavouriteSong from "../src/FavouriteSong";
import ExportButton from "./components/ExportButton"
import "./css/NewDesign.css"
import ExpandedBar from "./components/ExpandedBar"
let globalEditor = null;

const handleD3Data = (event) => {
    console.log(event.detail);
};

export default function StrudelDemo() {

    const hasRun = useRef(false);
    const [Paused, SetPaused] = useState(false);
    const [showCanva, SetOpenCanvas]= useState(false)
    
    useEffect(() => {

        if (!hasRun.current) {
            document.addEventListener("d3Data", handleD3Data);
            console_monkey_patch();
            hasRun.current = true;
            //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
            //init canvas
            const canvas = document.getElementById('roll');
            canvas.width = canvas.width * 2;
            canvas.height = canvas.height * 2;
            const drawContext = canvas.getContext('2d');
            const drawTime = [-2, 2]; // time window of drawn haps
            globalEditor = new StrudelMirror({
                defaultOutput: webaudioOutput,
                getTime: () => getAudioContext().currentTime,
                transpiler,
                root: document.getElementById('editor'),
                drawTime,
                onDraw: (haps, time) => drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 }),
                prebake: async () => {
                    initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
                    const loadModules = evalScope(
                        import('@strudel/core'),
                        import('@strudel/draw'),
                        import('@strudel/mini'),
                        import('@strudel/tonal'),
                        import('@strudel/webaudio'),
                    );
                    await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);
                },
            });
           
            document.getElementById('proc').value = stranger_tune
            /*SetupButtons(globalEditor, SetPaused, pauseAudio)*/
            
           Proc(globalEditor)
           
        }

    }, []);

    return (
        <div>
            <h1 className="fw-bold gradient-text">Strudel Demo</h1>

            <main>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6" style={{ maxHeight: '50vh', /*overflowY: 'auto' */}}>
                            <PreprocessTextarea />

                            <div className="d-flex justify-content-between align-items-center mb-5 mt-3">
                                <h5>Process the text: </h5>
                                <ProcButtons globalEditor={globalEditor} />
                            </div>
                            <div className="card-group">
                                <ExpandedBar text="Managing the melody"
                                    object={<div className="btn-group">
                                        <PlayButtons globalEditor={globalEditor} setPause={SetPaused} />
                                        <PauseAndResumeButton pause={Paused} setPause={SetPaused} pauseAudio={pauseAudio} />
                                    </div>} />
                                <ExpandedBar text="Change volume"
                                    object={<VolumeRange />} />


                            </div>
                           
                            
                          
                            <div className="d-flex justify-content-between align-items-center mb-5 mt-3">
                                <h5>Canvas:</h5>
                                <button className="btn btn-outline-warning" onClick={() => (
                                    SetOpenCanvas(!showCanva))}>
                                    {showCanva ? "Hide canvas" : "Show canvas"}
                                </button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-2 mt-3">
                                <CardMangingFiles text="File Managing" image="https://i.pinimg.com/1200x/6a/88/f6/6a88f6269a89d6185efd1be85e10e668.jpg" objects={< ExportButton />} />
                                <CardMangingFiles text="Favourite" image="https://i.pinimg.com/1200x/fe/70/c9/fe70c9ee677092178e4de3d93dde4c79.jpg" objects={< FavouriteSong />} />

                            </div>
                          
                        </div>
                        
                        
                        <div className="col-md-6" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                            <div  id="editor" />
                            <div id="output" />
                            <nav className="mt-3 mb-3">
                                <div className="col-md-4">
                                    <DjControl globalEditor={globalEditor} />
                                </div>
                            </nav>
                        </div>
                    </div>

                   
                    <div className="mt-4 d-flex justify-content-end align-items-center">
                        
                            
                        
                        
                        <canvas
                            id="roll"
                            className={`canvasDes preprocess-textarea ms-3 ${showCanva ? "show" : "hide"}`}
                        ></canvas>
                         
                        
                    </div>
                </div>
                    
                   
                    
                        
             
            </main >

        </div >
    );


}