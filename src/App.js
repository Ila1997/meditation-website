import './App.css';
import image from './img/meditation.png'
import React, { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';
import song1 from './audio/WhiteNoise.mp3';
import song2 from './audio/Sea.mp3';
import song3 from './audio/Rain.mp3';
import song4 from './audio/Campfire.mp3';
import song5 from './audio/Piano.mp3';
import song6 from './audio/Guitar.mp3';
import Header from './components/Header';
import Footer from './components/Footer';

import { PiPauseFill, PiSkipBackBold } from "react-icons/pi";


function App() {
  const [countdown, setCountdown] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSongs, setCurrentSongs] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  const changeTimer = (event) => {
    const time = parseInt(event.target.getAttribute('data-time'));
    setCountdown(time);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const resetTimer = () => {
    setCountdown(0);
    setIsPaused(false);
  };

  useEffect(() => {
    let interval;
    if (countdown > 0 && !isPaused) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [countdown, isPaused]);

  useEffect(() => {
    if (countdown === 0) {
      stopAllSongs();
    }
  }, [countdown]);

  const stopAllSongs = () => {
    Object.values(currentSongs).forEach((song) => {
      if (song.playing()) {
        song.stop();
      }
    });
  };

  useEffect(() => {
    if (isPaused) {
      pauseAllSongs();
    } else if (isPlaying) {
      playAllSongs();
    }
  }, [isPaused]);

  const songs = {
    'btn1': song1,
    'btn2': song2,
    'btn3': song3,
    'btn4': song4,
    'btn5': song5,
    'btn6': song6,
  };

  const playSong = (buttonId) => {
    if (currentSongs[buttonId] && currentSongs[buttonId].playing()) {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        currentSongs[buttonId].pause();
      } else {
        currentSongs[buttonId].play();
      }
    } else {
      const sound = new Howl({
        src: [songs[buttonId]],
        volume: 0.3, 
        onend: () => {
          setIsPlaying(false);
        },
      });
      const updatedSongs = { ...currentSongs, [buttonId]: sound };
      setCurrentSongs(updatedSongs);
      setIsPlaying(true);
      sound.play();
    }
  };

  const pauseAllSongs = () => {
    Object.values(currentSongs).forEach((song) => {
      if (song.playing()) {
        song.pause();
      }
    });
  };

  const playAllSongs = () => {
    Object.values(currentSongs).forEach((song) => {
      if (!song.playing()) {
        song.play();
      }
    });
  };

  return (
    <div className="App">
      <Header />

      <div className="items">
        <div className="items-grid">
          <div className="time-div">
            
          <div className="buttons-div">
            <h3>Set Timer:</h3>
            <button data-time="120" className="time-btn" id="2min" onClick={changeTimer}>
              2 min
            </button>
            <button data-time="300" className="time-btn" id="5min" onClick={changeTimer}>
              5 min
            </button>
            <button data-time="600" className="time-btn" id="10min" onClick={changeTimer}>
              10 min
            </button>
            <button data-time="900" className="time-btn" id="15min" onClick={changeTimer}>
              15 min
            </button>
          </div>
          
            <h3 className="time-display">{`${Math.floor(countdown / 60)
              .toString()
              .padStart(2, '0')}:${(countdown % 60).toString().padStart(2, '0')}`}</h3>
          </div>

        </div>

        <img src={image} alt="meditation-img" className="meditation-img" />
        <PiPauseFill alt="pause" className="pause" onClick={pauseTimer} color='#ff3388'size={30}/>
        <PiSkipBackBold alt="reset" className="reset" onClick={resetTimer} color='#ff3388'size={30}/>
      </div>

      <Footer playSong={playSong} />
    </div>
  );
}

export default App;
