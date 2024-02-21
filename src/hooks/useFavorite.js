import { useState } from "react";

export const useFavorite = () => {
  const [favorite, setFavorite] = useState(false);

  const onClickFavorite = () => {
    setFavorite(!favorite);
  };

  return {
    favorite,
    onClickFavorite,
  };
};
