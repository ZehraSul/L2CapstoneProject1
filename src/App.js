import { useEffect, useState, useRef } from "react";

import Button from "react-bootstrap/Button";

import Game from "./Components/Game.js";
import Board from "./Components/Board.js";
import Restart from "./Components/Restart.js";
import Help from "./Components/Help.js";
import RandomiseBoard from "./Components/RandomiseBoard.js";

import "./scss/app.scss";

// render board based on array in deck.js

export default function App() {
  const [tiles, setTiles] = useState(() => RandomiseBoard(Board.concat(Board)));

  const [selectedTiles, setselectedTiles] = useState([]);
  const [matchedTiles, setmatchedTiles] = useState({});
  const [DisableAllTiles, setDisableAllTiles] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const timeout = useRef(null);

  // Disables playing board

  const disable = () => {
    setDisableAllTiles(true);
  };

  // Enables playing board

  const enable = () => {
    setDisableAllTiles(false);
  };

  // Storing all the matched tiles, if the matched tiles is all the tiles on the board. Display a "win" msg to the user.

  const checkCompletion = () => {
    if (Object.keys(matchedTiles).length === Board.length) {
      setShowModal(true);
    }
  };

  // Check if the "key" of the 1st and 2nd tile is the same.

  const evaluate = () => {
    const [first, second] = selectedTiles;
    enable();
    if (tiles[first].key === tiles[second].key) {
      setmatchedTiles((prev) => ({ ...prev, [tiles[first].key]: true }));
      setselectedTiles([]);
      return;
    }

    timeout.current = setTimeout(() => {
      setselectedTiles([]);
    }, 500);
  };

  // When only 1 tile clicked cancel timeout used to flip the tile

  const handleTileClick = (index) => {
    if (selectedTiles.length === 1) {
      setselectedTiles((prev) => [...prev, index]);
      disable();
    } else {
      clearTimeout(timeout.current);
      setselectedTiles([index]);
    }
  };

  // Allow only 2 tiles to be revealed. If 2 tiles are flipped and do not match, flip the tiles back in half a second

  useEffect(() => {
    let timeout = null;
    if (selectedTiles.length === 2) {
      timeout = setTimeout(evaluate, 500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [selectedTiles]);

  // Keep track of matched tiles

  useEffect(() => {
    checkCompletion();
  }, [matchedTiles]);
  const flippedTileCheck = (index) => {
    return selectedTiles.includes(index);
  };

  const inactiveTileCheck = (aTile) => {
    return Boolean(matchedTiles[aTile.key]);
  };

  // Restarts the game

  const handleRestart = () => {
    setmatchedTiles({});
    setselectedTiles([]);
    setShowModal(false);
    setDisableAllTiles(false);
    setTiles(RandomiseBoard(Board.concat(Board)));
  };

  // Shows instructions for game when the help button is clicked

  const handleHelp = () => {
    setShowHelpModal(true);
  };

  // Close the help modal

  const handleClose = () => {
    setShowHelpModal(false);
  };

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <div>
          <Button
            onClick={handleRestart}
            variant="primary"
            style={{ marginRight: "5px" }}
          >
            Start new game
          </Button>

          <Button onClick={handleHelp} variant="primary">
            Help
          </Button>
        </div>
      </header>

      <Game
        tiles={tiles}
        DisableAllTiles={DisableAllTiles}
        inactiveTileCheck={inactiveTileCheck}
        flippedTileCheck={flippedTileCheck}
        handleTileClick={handleTileClick}
      />

      <Restart handleRestart={handleRestart} showModal={showModal} />

      <Help handleClose={handleClose} showHelpModal={showHelpModal} />
    </div>
  );
}
