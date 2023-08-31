import { useContext, useEffect, useRef, useState } from "react";
import { DrumMachineContext } from "./DrumMachineProvider";

const DELAY_PRESS_EFFECT = 100;

export type DrumPadProps = {
  keyPad: string,
  soundPath: string,
  drumName: string,
};

export default function(props: DrumPadProps) {
  const drumContext = useContext(DrumMachineContext);
  const [state, setState] = useState(false);
  const audio = useRef(null);

  function playAudio() {
    if (audio.current == null || drumContext == null) {
      console.error("It's seem error here", audio.current);
      return;
    }
    setState(true);
    drumContext.updateName(props.drumName);

    let element = audio.current as HTMLAudioElement;
    element.play();
    setTimeout(() => {
      setState(false);
      drumContext.updateName("");
    }, DELAY_PRESS_EFFECT);
  }

  function playSoundKeyDown(kv: KeyboardEvent) {
    if (kv.key == props.keyPad.toLowerCase() || kv.key == props.keyPad) {
      playAudio();
    }
  }

  useEffect(() => {
    document.addEventListener('keypress', playSoundKeyDown);
    return () => {
      document.removeEventListener('keypress', playSoundKeyDown);
    }
  }, [])

  return (
    <div id={props.keyPad} onClick={() => playAudio()}
      className={`drum-pad flex justify-center items-center border-gray-200 
        border-2 rounded p-4 text-2xl transition-color 
        duration-100 cursor-pointer ${state ? "text-white bg-blue-700" : ""}`}>
      {props.keyPad}
      <audio className="clip" id={props.keyPad} ref={audio} src={props.soundPath}></audio>
    </div>
  )
}
