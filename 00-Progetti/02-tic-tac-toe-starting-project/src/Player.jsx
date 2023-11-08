import { useState } from "react";

export default function Player({ name, symbol }) {
  const [editMode, setEditMode] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const editModeHandler = () => {
    setEditMode((prevMode) => !prevMode);
  };

  const playerNameHandler = (props) => {
    setPlayerName(props.target.value);
  };

  let nameField = <span className="player-name">{playerName}</span>;

  let buttonField = <button onClick={editModeHandler}>Edit</button>;

  if (editMode) {
    nameField = (
      <input type="text" value={playerName} onChange={playerNameHandler} />
    );
    buttonField = <button onClick={editModeHandler}>Confirm</button>;
  }

  return (
    <li>
      <span className="player">
        {nameField}
        <span className="player-symbol">{symbol}</span>
        {buttonField}
      </span>
    </li>
  );
}
