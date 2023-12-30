import Particles from 'react-particles';
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

const Fireworks = () => {

const particleinit = async(engine) => {
        await loadFireworksPreset(engine)
      }

  return <Particles  init ={particleinit} options={{preset:"fireworks"}} />;
};

export default Fireworks;
