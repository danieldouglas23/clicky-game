import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card" onClick={() => props.selectCharacter(props.name)}>
      <div className="img-container" > 
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong> 
          </li>
        </ul>
      </div>
    </div>
  );
}

// onClick={() => props.runGame(props.id)}
export default CharacterCard;