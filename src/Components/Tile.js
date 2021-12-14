import React from "react";

import classnames from "classnames";

import tileBG from "../images/tileBG.jpg";

import "../scss/tile.scss";

/* Handles the actions taken when a tile is clicked on */

const Tile = ({
  onClick,
  aTile,
  index,
  inactiveTile,
  flippedTile,
  disabledTile,
}) => {
  const handleClick = () => {
    if (!flippedTile && !disabledTile) {
      onClick(index);
    }
  };

  return (
    <div
      className={classnames("tile", {
        "is-flipped": flippedTile,
        "is-inactive": inactiveTile,
      })}
      onClick={handleClick}
    >
      <div className="tile-face tile-front-face">
        <img src={tileBG} alt="tileBG" />
      </div>
      <div className="tile-face tile-back-face">
        <img src={aTile.image} alt={aTile.key} />
      </div>
    </div>
  );
};

export default Tile;
