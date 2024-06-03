export type TSprites = {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other?: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      'official-artwork': {
        front_default: string;
      };
    };
  };