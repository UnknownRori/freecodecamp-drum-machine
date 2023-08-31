import DrumPad, { DrumPadProps } from "./DrumPad";
import DrumMachineProvider from "./DrumMachineProvider";
import DrumDisplay from "./DrumDisplay";

import Heater1 from "../assets/Heater-1.mp3";
import Heater2 from "../assets/Heater-2.mp3";
import Heater3 from "../assets/Heater-3.mp3";
import Heater4 from "../assets/Heater-4_1.mp3";
import Clap from "../assets/Heater-6.mp3";
import OpenHH from "../assets/Dsc_Oh.mp3";
import KickNHat from "../assets/Kick_n_Hat.mp3";
import Kick from "../assets/RP4_KICK_1.mp3";
import ClosedHH from "../assets/Cev_H2.mp3";

const drumPad: Array<DrumPadProps> = [
  { keyPad: "Q", soundPath: Heater1, drumName: "Heater 1" },
  { keyPad: "W", soundPath: Heater2, drumName: "Heater 2" },
  { keyPad: "E", soundPath: Heater3, drumName: "Heater 3" },
  { keyPad: "A", soundPath: Heater4, drumName: "Heater 4" },
  { keyPad: "S", soundPath: Clap, drumName: "Clap" },
  { keyPad: "D", soundPath: OpenHH, drumName: "Open HH" },
  { keyPad: "Z", soundPath: KickNHat, drumName: "Kick n' Hat" },
  { keyPad: "X", soundPath: Kick, drumName: "Kick" },
  { keyPad: "C", soundPath: ClosedHH, drumName: "Closed HH" },
];

export default function() {
  return (
    <div id="drum-machine" className="flex sm:flex-col md:flex-row gap-12 rounded shadow border-gray-300 border-2 p-4">
      <DrumMachineProvider>
        <div id="drum-pad" className="grid grid-cols-3 grid-rows-3 gap-2">
          {drumPad.map((val) => {
            return (
              <DrumPad key={val.keyPad} keyPad={val.keyPad} soundPath={val.soundPath} drumName={val.drumName} />
            )
          })}
        </div>

        <div className="flex h-full justify-center items-center m-auto">
          <DrumDisplay />
        </div>
      </DrumMachineProvider>
    </div>
  );
}
