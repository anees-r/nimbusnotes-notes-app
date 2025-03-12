import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const stateObject = {
    name: "Anees",
  };

  const [state, setState] = useState(stateObject);

  const update = (name) => {
    setTimeout(() => {
      setState({
        name,
      });
    }, 3000);
  };

  return <NoteContext value={{ state, update }}>{props.children}</NoteContext>;
};

export default NoteState;
