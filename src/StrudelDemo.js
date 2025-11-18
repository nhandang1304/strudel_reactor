import './App.css';
import { useEffect, useRef, useState } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch, { getD3Data, subscribe, unsubscribe } from './console-monkey-patch';
import ScatterPlot from "./components/D3BuildGraph";
import addFavourite from "./utils/AddFavouriteSong";
import PlayButtons from "./components/PlayButtons";
import ProcButtons from "./components/ProcButtons";
import PreprocessTextarea from "./components/PreprocessTextarea";
import VolumeRange from "./components/VolumeRange";
import PauseAndResumeButton from "./components/PauseAndResumeButtons";
import { VscGraph } from "react-icons/vsc";
import { Proc } from "./utils/ProcAudioLogic";
import pauseAudio from "../src/utils/PauseAndResumeLogic";
import FavouriteSong from "./components/AddFavouriteSongButton";
import HandlingFilesCard from "./components/ExportButton"
import "./css/NewDesign.css"
import CardFeatures from "./components/CardFeatures"
import SpeedAudio from "./components/SpeedAudio"
import { FaChalkboard } from "react-icons/fa";
import Tooltips from "./components/TooltipDes";
import { NavLink } from "react-router-dom"
import { GiLoveSong } from "react-icons/gi";
import  MusicWave  from "./components/MusicWave";


const handleD3Data = (event) => {
    console.log(event.detail);
    console.log()
};


export default function StrudelDemo() {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [currentMelody, setCurrentMelody] = useState('');
    // State to store favorite songs, initialized from localStorage
    const [favourites, setFavourites] = useState(() => {
        const saved = localStorage.getItem("favourites");
        return saved ? JSON.parse(saved) : [];
    });
    // Function to add the current melody to the favorites list
    function handleAddFavourite() {
        const success = addFavourite({
            id: Date.now().toString(),
            name: "My Melody " + new Date().toLocaleTimeString(),
            melody: currentMelody,
        }, favourites, setFavourites);

        if (success) {
            setAlertMessage("Added successfully to favourite list!");
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
                setAlertMessage("");
            }, 1500);
        }
    }

   
    const globalEditor = useRef(null);
    const hasRun = useRef(false);
    // State to manage playback pause status, speed, and volume
    const [Paused, setPause] = useState(false);
    const [speed, setSpeed] = useState(1)
   const[volume, setVolumeAu] = useState(0.5)
    const [playingAudio, setPlayingAudio] = useState(false);

    // State to toggle visibility of canvas wave and D3 graph
    const [showCanva, SetOpenCanvas] = useState(false)
    const [showD3Chart, setShowD3Chart] = useState(false);
    const context = getAudioContext();
    const [logArray, setLogArray] = useState(getD3Data());

    // Subscribe to 'd3Data' event to update graph data dynamically
    useEffect(() => {
        function onD3Data(event) {
            setLogArray(event.detail);
        }
        subscribe("d3Data", onD3Data);

        return () => {
            unsubscribe("d3Data", onD3Data);
        }
    }, []);
    useEffect(() => {

        if (!hasRun.current) {
            document.addEventListener("d3Data", handleD3Data);
            console_monkey_patch();
            hasRun.current = true;
            //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
            //init canvas
            const canvas = document.getElementById('roll');

            const drawContext = canvas.getContext('2d');
            const drawTime = [-2, 2]; // time window of drawn haps
            globalEditor.current = new StrudelMirror({
                defaultOutput: webaudioOutput,
                getTime: () => getAudioContext().currentTime,
                transpiler,
                root: document.getElementById('editor'),
                drawTime,
                onDraw: (haps, time) => {
                    MusicWave({ ctx: drawContext, time })
                },
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
            setCurrentMelody(stranger_tune);
            Proc(setPlayingAudio, globalEditor.current, setPause, setCurrentMelody, context, speed)
           
        }

    }, []);
 
    return (
        <div className="bodyStrud">
            

            <main>
                {showAlert && (
                    <div className="alert alert-info" role="alert">
                        {alertMessage}
                    </div>
                )}
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
                                <VolumeRange setVolumeAu={setVolumeAu} setCurrentMelody={setCurrentMelody} setPlayingAudio={setPlayingAudio} playingAudio={playingAudio} globalEditor={globalEditor} speed={speed} context={context} setPause={setPause} />
                            </div>
                            <div className="borderFeatures  col-3">
                                <SpeedAudio setCurrentMelody={setCurrentMelody} setPlayingAudio={setPlayingAudio} playingAudio={playingAudio} setSpeed={setSpeed} pause={Paused} globalEditor={globalEditor} setPause={setPause} context={context} />
                            </div>
                            
                        </div>
                        {/* Melody input and controls */}
                        <div className="col-md-6" style={{ maxHeight: '50vh', /*overflowY: 'auto' */}}>
                            <div className="borderFeatures">
                                <h5 className="gradientTitleStrud">Enter your melody or pattern below:</h5>
                                <PreprocessTextarea value={currentMelody} onChange={setCurrentMelody} />
                            
                                <div className="d-flex justify-content-between align-items-center mt-2 mb-2 gap-1">
                                   
                                    < FavouriteSong addFavourite={handleAddFavourite} />
                                    <ProcButtons setCurrentMelody={setCurrentMelody} setPlayingAudio={setPlayingAudio} globalEditor={globalEditor} setPause={setPause} pause={Paused} context={context} />
                                </div>
                                
                            </div>

                            {/* Canvas and D3 Chart toggles */}
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
                                    <h3 className="gradientTitleStrud text-center" >D3 Graph</h3>
                                    <Tooltips title="Show D3 Chart" >
                                        <button className="btn btn-outline-light fw-bold mt-2" onClick={() => setShowD3Chart(!showD3Chart)}>
                                            <VscGraph />
                                            <br />
                                            {showD3Chart ? "Hide D3 Chart" : "Show D3 Chart"}
                                        </button>
                                    </Tooltips>

                                   
                                </div>
                            </div>
                            {/* Favorites and file handling */}
                            <CardFeatures text1="Your favorite List" text2="File Handling"
                                obj1={
                                    
                                   
                                    <NavLink to="/favourites" className="fw-bold btn btn-outline-light mt-2">
                                    <GiLoveSong size="25" color="red"/>
                                    <br/>
                                    See your favorite song
                                </NavLink> 
                                            

                                } obj2={< HandlingFilesCard setPlayingAudio={setPlayingAudio} globalEditor={globalEditor} setPause={setPause} context={context} />} />
                        </div>
                        
                        {/* Editor and output panel */}
                        <div className="col-md-6 " style={{ maxHeight: '78vh', overflowY: 'auto' }}>

                            <div className="borderCode">
                                <div id="editor" />
                                <div id="output" />
                            </div>

                           
                        </div>
                       
                    </div>

                    {/* Canvas and D3 Chart displays */}
                    <div className="mt-4 d-flex justify-content-end align-items-center">
                        <div className={`canvasDes borderFeatures borderCode ms-3 ${showCanva ? "show" : "hide"}`} style={{ position: "relative" }}>
                            <button className="closeButton" onClick={() => SetOpenCanvas(false)}>✕</button>
                            <h3 className="gradientTitleStrud">
                                Music Wave Visualization
                            </h3>
                            <canvas
                                id="roll" width={700} height={700}
                              
                            ></canvas>
                        </div>
                        
                        {showD3Chart && (
                            <div
                                className={`canvasDes borderFeatures borderCode ms-3 ${showD3Chart ? "show" : "hide"}`}
                                style={{ position: "relative" }}
                            >
                               
                                <button
                                    onClick={() => setShowD3Chart(false)}
                                    className="closeButton">
                                
                                    X
                                </button>

                                <ScatterPlot logArray={logArray} />
                            </div>
                        )}
                        
                    </div>
                </div>
                    
                   
                    
                        
             
            </main >

        </div >
    );


}