/* Array of images and their names used to create the playing board */

const Images = [
  "Bear",
  "Peacock",
  "Unicorn",
  "Wolf",
  "Fish",
  "Otter",
  "Parrot",
  "Whale",
];

const imagesContext = require.context("../images", false);

const Board = Images.map((name) => {
  return {
    key: name,
    image: imagesContext(`./${name}.png`).default,
  };
});
export default Board;
