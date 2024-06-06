import bugIcon from '../images/pokemonTypes/bug.png'; 
import darkIcon from '../images/pokemonTypes/dark.png'; 
import dragonIcon from '../images/pokemonTypes/dragon.png'; 
import electricIcon from '../images/pokemonTypes/electric.png'; 
import fairyIcon from '../images/pokemonTypes/fairy.png'; 
import fightingIcon from '../images/pokemonTypes/fighting.png'; 
import fireIcon from '../images/pokemonTypes/fire.png'; 
import flyingIcon from '../images/pokemonTypes/flying.png'; 
import ghostIcon from '../images/pokemonTypes/ghost.png'; 
import grassIcon from '../images/pokemonTypes/grass.png'; 
import groundIcon from '../images/pokemonTypes/ground.png'; 
import iceIcon from '../images/pokemonTypes/ice.png'; 
import normalIcon from '../images/pokemonTypes/normal.png'; 
import poisonIcon from '../images/pokemonTypes/poison.png'; 
import psychicIcon from '../images/pokemonTypes/psychic.png'; 
import rockIcon from '../images/pokemonTypes/rock.png'; 
import steelIcon from '../images/pokemonTypes/steel.png'; 
import waterIcon from '../images/pokemonTypes/water.png'; 

export type PokemonType = 'bug' | "dark" | "dragon" | "electric" | "fairy" | "fighting" | "fire" | "flying" | "ghost" | "grass" | "ground" | "ice" | "normal" | "poison" | "psychic" | "rock" | "steel" | "water";

const typeIcons = {
    bug: bugIcon,
    dark: darkIcon,
    dragon: dragonIcon,
    electric: electricIcon,
    fairy: fairyIcon,
    fighting: fightingIcon,
    fire: fireIcon,
    flying: flyingIcon,
    ghost: ghostIcon,
    grass: grassIcon,
    ground: groundIcon,
    ice: iceIcon,
    normal: normalIcon,
    poison: poisonIcon,
    psychic: psychicIcon,
    rock: rockIcon,
    steel: steelIcon,
    water: waterIcon
  };

export function getTypeIcon ( type: PokemonType ): string {
    return typeIcons[type];
};
