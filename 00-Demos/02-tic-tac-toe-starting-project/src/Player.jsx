import { useState } from "react";

export default function Player({ defaultName, symbol, isActive, onChangeName }) {
  const [editMode, setEditMode] = useState(false);
  const [playerName, setPlayerName] = useState(defaultName);

  const editModeHandler = () => {
    setEditMode((prevMode) => !prevMode);
    if (editMode) {
      onChangeName(symbol, playerName);
    }
  };

  const playerNameHandler = (props) => {
    setPlayerName(props.target.value);
  };

  let nameField = <span className="player-name">{playerName}</span>;

  if (editMode) {
    nameField = (
      <input
        type="text"
        value={playerName}
        onChange={playerNameHandler}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {nameField}
        <span className="player-symbol">{symbol}</span>
        <button onClick={editModeHandler}>{!editMode ? "Edit" : "Save"}</button>
      </span>
    </li>
  );
}
