import animDefault from "../assets/character-anim.webm";
import posterDefault from "../assets/character-poster.png";
import animCoffee from "../assets/character-anim-coffee.webm";
import posterCoffee from "../assets/character-poster-coffee.png";
import animLaptop from "../assets/character-anim-laptop.webm";
import posterLaptop from "../assets/character-poster-laptop.png";

export const characterClips = [
  { id: "default", video: animDefault, poster: posterDefault },
  { id: "coffee", video: animCoffee, poster: posterCoffee },
  { id: "laptop", video: animLaptop, poster: posterLaptop },
];

export function pickDistinctClipPair() {
  const a = characterClips[Math.floor(Math.random() * characterClips.length)];
  let b = a;
  while (b.id === a.id) {
    b = characterClips[Math.floor(Math.random() * characterClips.length)];
  }
  return { introClip: a, heroClip: b };
}
