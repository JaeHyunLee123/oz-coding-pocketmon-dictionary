import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 *
 * @param {number} id
 * @returns {string}
 */
const createPocketmonSpeciesGetUrl = (id) => {
  return `https://pokeapi.co/api/v2/pokemon-species/${id}`;
};

/**
 * @typedef {Object} CreatePocketmonImageUrlProps
 * @property {number} id
 * @property {boolean} isFront
 */

/**
 *
 * @param {CreatePocketmonImageUrlProps} props
 * @returns {string}
 */

const createPocketmonImageUrl = ({ id, isFront = true }) => {
  const baseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
  if (isFront) {
    return `${baseUrl}/${id}.png`;
  } else {
    return `${baseUrl}/back/${id}.png`;
  }
};

export const fetchPocketmons = createAsyncThunk(
  "pocketmon/fetchPocketmons",
  async (maxId) => {
    const numberArray = Array.from({ length: maxId }, (_, i) => i + 1);

    const fetchPocketmonById = async (id) => {
      const response = await fetch(createPocketmonSpeciesGetUrl(id));
      const data = await response.json();

      /**
       * @typedef {Object} PocketmonData
       * @property {number} id
       * @property {string} description
       * @property {string} frontImage
       * @property {string} backImage
       */

      /**
       * @type {PocketmonData}
       */
      const pocketmonData = {
        id: id,
        description: data.flavor_text_entries.find(
          (el) => el.language.name === "ko"
        ).flavor_text,
        frontImage: createPocketmonImageUrl({ id, isFront: true }),
        backImage: createPocketmonImageUrl({ id, isFront: false }),
      };

      return pocketmonData;
    };

    return await Promise.all(numberArray.map((id) => fetchPocketmonById(id)));
  }
);
