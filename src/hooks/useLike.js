import { useState } from "react";
export const useLike = () => {
  const [likes, setLikes] = useState(0);

  const onClickLike = (id) => {
    setLikes((prev) => prev + 1);
  };

  return {
    likes,
    onClickLike,
  };
};
