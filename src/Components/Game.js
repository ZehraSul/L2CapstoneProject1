/* Using map method to render the tiles to the board */

import React from "react";

import Tile from "../Components/Tile.js";

const Game = ({
  tiles,
  DisableAllTiles,
  inactiveTileCheck,
  flippedTileCheck,
  handleTileClick,
}) => {
  return (
    <div className="container">
      {tiles.map((aTile, index) => {
        return (

          /* has unique key */
          
          <Tile
            key={index}
            aTile={aTile}
            index={index}
            disabledTile={DisableAllTiles}
            inactiveTile={inactiveTileCheck(aTile)}
            flippedTile={flippedTileCheck(index)}
            onClick={handleTileClick}
          />
        );
      })}
    </div>
  );
};

export default Game;
