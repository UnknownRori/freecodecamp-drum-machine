import React, { createContext, useState } from "react";

export type DrumMachineProviderContext = {
  name: string,
  updateName: (newName: string) => void,
} | null;

export type DrumMachineProviderProps = React.PropsWithChildren;

export const DrumMachineContext = createContext<DrumMachineProviderContext | null>(null);

export default function(props: DrumMachineProviderProps) {
  const [state, setState] = useState("");

  function updateName(newName: string) {
    setState(newName);
  }

  const providerValue = {
    name: state,
    updateName: updateName
  };

  return (
    <DrumMachineContext.Provider value={providerValue}>
      {props.children}
    </DrumMachineContext.Provider>
  );
}
