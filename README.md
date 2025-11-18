# Project README

---

##  Controls Description
- **Preprocess**
   Saves the current song code before playback or further processing.
- **Process and Play**  
  Processes the current song code and immediately plays the updated audio output.
- **Restart**  
  Stops the current audio playback, resets the audio context, and restarts the song from the beginning using the latest version of the code.
- **Stop**  
  Completely stops all audio playback and clears any scheduled sounds, without restarting the song.
- **D3 Graph**  
  Shows a dynamic and interactive graph updated in real-time based on data input.

- **Canvas Control**  
  Displays the waveform color visualization.

- **Volume Control**  
  Adjusts the overall volume of the playback.

- **Playback Speed Control**  
  Allows changing the tempo of the playback.

- **Play/Pause Button**  
  Starts or pauses the audio playback.

- **Import/Export Controls**  
  Enables importing and exporting project settings or song codes as CSV or JSON files.

- **Add Favourite Song**  
  Stores the code of a song into the favourite song list.

- **Favourite Song List**  
  Displays all favourite songs with options to:  
  - **Remove Button:** Remove a song from the favourite list.  
  - **Show Melody:** Display the full code of the song.
---


##  Usage Guidelines and Quirks

- Adjusting volume or speed will restart the song playback applying the new settings immediately. This means that changing either will stop the current playback and start the melody again with the updated volume or speed.
- Favourites are saved in the browser’s localStorage, so clearing cache will remove them.
- To import a melody file, you must stop the song playback first before importing.

---

##  Demonstration Video

Watch the project demonstration here:  
➡️ [Demo Video Link](https://your-video-link.com)

---

##  Bonus Points Claimed

- I spent about 8 hours learning how music works on Strudel.cc and remixing an original song. I modified melody patterns, changed the tempo dynamically, added new rhythm layers, and switched the sound to a square wave. I believe that this new remix shows my own creative and technical effort, not just copying.

---

##  Song Code Source

The song patterns and samples are based on the following sources from the Strudel.cc bakery:

- [Algorave Dave Samples](https://github.com/algorave-dave/samples)  
- [Dirt Samples by TidalCycles](https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json)  
- [Tidal Drum Machines by Mittans](https://raw.githubusercontent.com/Mittans/tidal-drum-machines/main/machines/tidal-drum-machines.json)

---

##  AI Tools Used

- **ChatGPT (OpenAI)**  
  - **Inputs:** I have a string of code that contains a line like `setcps(140/60/4)` which sets the current tempo.  
I want to write a JavaScript function that finds this `setcps(...)` call in the string and updates its value dynamically based on a given `speed` variable. For example, if `speed` is 2, then `setcps(140/60/4)` should become `setcps(140/60/4 * 2)` or its calculated value.   
  - **Outputs:** 
       
        .replace(
            /all\(x\s*=>\s*x\.gain\(mouseX\.range\(\s*[0-9.]+\s*,\s*[0-9.]+\s*\)\s*\)\)/g,
            `all(x => x.gain(${vol}))`
        )
    
        .replace(
            /all\(x\s*=>\s*x\.gain\(\s*[0-9.]+\s*\)\)/g,
            `all(x => x.gain(${vol}))`
        );

---


