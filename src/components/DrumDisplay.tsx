import { useContext } from "react"
import { DrumMachineContext } from "./DrumMachineProvider"

export default function() {
  const drumContext = useContext(DrumMachineContext)

  return (
    <span id="display" className="bg-slate-100 border-2 border-gray-200 shadow 
      rounded min-w-[12rem] min-h-[3rem] text-2xl flex justify-center items-center">{drumContext?.name ?? ""}</span>
  )
}
