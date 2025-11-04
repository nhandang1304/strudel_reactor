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
import CardFeatures from "./components/CardFeatures"
import SpeedAudio from "./components/SpeedAudio"
import { FaChalkboard } from "react-icons/fa";
import Tooltips from "./components/TooltipDes";
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
        <div className="bodyStrud">
            

            <main>

                <div className="container-fluid">
                    <div className="row">
                        <h1 className="display-3 fw-bold gradientTitleStrud">Strudel Demo</h1>
                        <div className="d-flex justify-content-end  align-items-center mb-5 gap-3">
                           
                            <div className="btn-group ">
                                <div className="modifyBar gap-2 d-flex ">
                                    <PlayButtons globalEditor={globalEditor} setPause={SetPaused} />
                                    <PauseAndResumeButton pause={Paused} setPause={SetPaused} pauseAudio={pauseAudio} />
                                </div>
                               
                            </div>
                            <div className=" modifyBar col-1" style={{backgroundColor: "black"} }>
                                <VolumeRange />
                            </div>
                            <div className="modifyBar col-3">
                                <SpeedAudio />
                            </div>
                            
                        </div>
                        <div className="col-md-6" style={{ maxHeight: '50vh', /*overflowY: 'auto' */}}>
                            <div className="borderFeatures">
                                <h5 className="gradientTitleStrud">Enter your melody or pattern below:</h5>
                                <PreprocessTextarea />
                            
                                <div className="d-flex justify-content-between align-items-center mt-2 mb-2 gap-1">
                                   
                                     < FavouriteSong/>
                                    <ProcButtons globalEditor={globalEditor} />
                                </div>
                            </div>
                            <div className="row ">
                                <div className="borderFeatures col-4 mt-5 d-flex flex-column">
                                    <h3 className="gradientTitleStrud text-center" >Canvas</h3>
                                    <Tooltips title="Show the canva" >
                                        <button className="btn btn-outline-light fw-bold mt-2 " onClick={() => (
                                        SetOpenCanvas(!showCanva))}>
                                        <FaChalkboard />
                                        <br />
                                        {showCanva ? "Hide canvas" : "Show canvas"}
                                        </button>
                                    </Tooltips>
                                </div>

                                <div className="borderFeatures mx-5 col-6 mt-5 d-flex flex-column align-items-center">
                                    <h3 className="gradientTitleStrud text-center" >DJ Control</h3>
                                    <div className="mt-2">
                                        <DjControl />
                                    </div>
                                   
                                </div>
                            </div>
                            <CardFeatures text1="Your favorite List" text2="File Handling" obj1={< FavouriteSong />} obj2={< ExportButton />}/>
                            
                            
                          
                        </div>
                        
                        
                        <div className="col-md-6 " style={{ maxHeight: '70vh', overflowY: 'auto' }}>

                            <div className="borderCode">
                                <div id="editor" />
                                <div id="output" />
                            </div>

                            <DjControl/>
                        </div>
                       
                    </div>

                   
                    <div className="mt-4 d-flex justify-content-end align-items-center">
                        
                        <canvas
                            id="roll"
                            className={`canvasDes preprocess-textarea  borderCode ms-3 ${showCanva ? "show" : "hide"}`}
                        ></canvas>
                       
                        
                    </div>
                </div>
                    
                   
                    
                        
             
            </main >

        </div >
    );


}