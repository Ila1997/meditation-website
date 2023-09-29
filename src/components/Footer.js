import React from 'react';
import { PiWaveformBold, PiSunHorizonBold, PiCloudRainBold, PiFireBold, PiPianoKeysFill, PiGuitarBold } from "react-icons/pi";

const Footer = ({ playSong }) => {
  return (
    <footer className="footer">
      Listen to relaxing sounds while you meditate...
      
      <button className="btn-footer" onClick={() => playSong('btn1')}>  <PiWaveformBold style={{ background: "transparent" }}/> White Noise </button>
      <button className="btn-footer" onClick={() => playSong('btn2')}>  <PiSunHorizonBold style={{ background: "transparent" }}/> Sea Waves</button>
      <button className="btn-footer" onClick={() => playSong('btn3')}>  <PiCloudRainBold style={{ background: "transparent" }}/> Rain </button>
      <button className="btn-footer" onClick={() => playSong('btn4')} > <PiFireBold style={{ background: "transparent" }}/> Campfire </button>
      <button className="btn-footer" onClick={() => playSong('btn5')} > <PiPianoKeysFill style={{ background: "transparent" }}/> Piano </button>
      <button className="btn-footer" onClick={() => playSong('btn6')} > <PiGuitarBold style={{ background: "transparent" }}/> Guitar </button>
      
      </footer>
      
  );
};

export default Footer;