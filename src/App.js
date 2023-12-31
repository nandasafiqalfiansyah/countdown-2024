import { Typewriter } from "react-simple-typewriter"
import { useState } from "react"
import Countdown from "react-countdown";
import Particles from 'react-particles';
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

function App() {
  const newYearDate = new Date('2024-01-01T00:00:00Z');
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div>
        <p>{days}hari {hours} jam {minutes} menit {seconds} detik</p>
      </div>
    );
  };
  const [newYearMessagw ,setNewtearMessage] = useState(["by 2023",
  ])
  const particleinit = async(engine) => {
    await loadFireworksPreset(engine)
  }
  return (
   <>
   <Particles  init ={particleinit} options={{preset:"fireworks"}} />
   <div className= "flex flex-col justify-center items-center min-h-screen">
    <span className="text-white text-4xl font-bold z-50 mb-4">
      <Typewriter words={newYearMessagw} loop={false} cursorStyle={"✨"} cursorColor="red" cursor/>
    </span>
    <div className="z-50 text-white font-bold  text-2xl ">
      <Countdown date={newYearDate} renderer={renderer} onComplete={()=> setNewtearMessage([
      "Selamat","Tahun","Baru","HNY 2024🥳🥳🥳","🥳🥳🥳"])}/>
    </div>
   </div>
   </>
  );
}

export default App;
