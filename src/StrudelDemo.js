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
import { initVisualizer, drawBarChart } from "./components/D3BuildGraph";

import { Proc } from "./utils/ProcAudioLogic";
import pauseAudio from "../src/utils/PauseAndResumeLogic";
import FavouriteSong from "../src/FavouriteSong";
import HandlingFilesCard from "./components/ExportButton"
import "./css/NewDesign.css"
import CardFeatures from "./components/CardFeatures"
import SpeedAudio from "./components/SpeedAudio"
import { FaChalkboard } from "react-icons/fa";
import Tooltips from "./components/TooltipDes";
import { NavLink } from "react-router-dom"
import { GiLoveSong } from "react-icons/gi";
/*let globalEditor = null;*/

const handleD3Data = (event) => {
    console.log(event.detail);
    //const logs = event.detail; 
    //drawBarChart(logs);
};

export default function StrudelDemo() {
    const globalEditor = useRef(null);
    const hasRun = useRef(false);
    const [Paused, setPause] = useState(false);
   const [speed, setSpeed] = useState(1)
    const [showCanva, SetOpenCanvas] = useState(false)
    const [playingAudio, setPlayingAudio] = useState(false);
    const context = getAudioContext();
    useEffect(() => {

        if (!hasRun.current) {
            document.addEventListener("d3Data", handleD3Data);
            console_monkey_patch();
            hasRun.current = true;
            //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
            //init canvas
            const canvas = document.getElementById('roll');
            initVisualizer(canvas);
            //canvas.width = canvas.width * 2;
            //canvas.height = canvas.height * 2;
            //const drawContext = canvas.getContext('2d');


            const drawTime = [-2, 2]; // time window of drawn haps
            globalEditor.current = new StrudelMirror({
                defaultOutput: webaudioOutput,
                getTime: () => getAudioContext().currentTime,
                transpiler,
                root: document.getElementById('editor'),
                drawTime,
              /*  onDraw: (haps, time) => { drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 }) },*/
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
            }, []);
            hasRun.current = true;
            document.getElementById('proc').value = stranger_tune
            /*SetupButtons(globalEditor, SetPaused, pauseAudio)*/
            
            Proc(setPlayingAudio, globalEditor.current, setPause, context, speed)
           
        }
        return () => {
            document.removeEventListener("d3Data", handleD3Data);
        };
    }, []);

    return (
        <div className="bodyStrud">
            

            <main>

                <div className="container-fluid">
                    <div className="row">
                        <h1 className="display-3 fw-bold gradientTitleStrud">Strudel Demo</h1>
                        <div className="d-flex justify-content-end  align-items-center mb-5 gap-3">
                           
                            <div className="btn-group ">
                                <div className="borderFeatures  gap-2 d-flex ">
                                    <PlayButtons setPlayingAudio={setPlayingAudio} globalEditor={globalEditor} setPause={setPause} context={context} />
                                    <PauseAndResumeButton setPlayingAudio={setPlayingAudio} pause={Paused} setPause={setPause} pauseAudio={pauseAudio} context={context} />
                                </div>
                               
                            </div>
                            <div className=" borderFeatures  col-2" style={{ backgroundColor: "black" }}>
                                <VolumeRange setPlayingAudio={setPlayingAudio} playingAudio={playingAudio} globalEditor={globalEditor} speed={speed} context={context} setPause={setPause} />
                            </div>
                            <div className="borderFeatures  col-3">
                                <SpeedAudio setPlayingAudio={setPlayingAudio} playingAudio={playingAudio} setSpeed={setSpeed} pause={Paused} globalEditor={globalEditor} setPause={setPause} context={context} />
                            </div>
                            
                        </div>
                        <div className="col-md-6" style={{ maxHeight: '50vh', /*overflowY: 'auto' */}}>
                            <div className="borderFeatures">
                                <h5 className="gradientTitleStrud">Enter your melody or pattern below:</h5>
                                <PreprocessTextarea />
                            
                                <div className="d-flex justify-content-between align-items-center mt-2 mb-2 gap-1">
                                   
                                    < FavouriteSong />
                                    <ProcButtons setPlayingAudio={setPlayingAudio} globalEditor={globalEditor} setPause={setPause} pause={Paused} context={context} />
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
                                        <DjControl speed={speed} pause={Paused} globalEditor={globalEditor} setPause={setPause} context={context} />
                                    </div>
                                   
                                </div>
                            </div>
                            <CardFeatures text1="Your favorite List" text2="File Handling"
                                obj1={
                                    
                                   
                                    <NavLink to="/create" className="fw-bold btn btn-outline-light mt-2">
                                    <GiLoveSong size="25" color="red"/>
                                    <br/>
                                    See your favorite song
                                </NavLink> 
                                            

                                } obj2={< HandlingFilesCard setPlayingAudio={setPlayingAudio} globalEditor={globalEditor} setPause={setPause} context={context} />} />
                        </div>
                        
                        
                        <div className="col-md-6 " style={{ maxHeight: '78vh', overflowY: 'auto' }}>

                            <div className="borderCode">
                                <div id="editor" />
                                <div id="output" />
                            </div>

                           
                        </div>
                       
                    </div>

                   
                    <div className="mt-4 d-flex justify-content-end align-items-center">
                        
                        <canvas
                            id="roll"
                            className={`canvasDes borderFeatures  borderCode ms-3 ${showCanva ? "show" : "hide"}`}
                        ></canvas>
                       
                        
                    </div>
                </div>
                    
                   
                    
                        
             
            </main >

        </div >
    );


}