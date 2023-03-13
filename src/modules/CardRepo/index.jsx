import React from "react";
import { useFavoriteRepos } from "../../store/favoriteRepos";

const CardRepo = ({ id, name, isFavorite }) => {
  const addFavoriteRepo = useFavoriteRepos((state) => state.addFavoriteRepo);
  const removeFavoriteRepo = useFavoriteRepos(
    (state) => state.removeFavoriteRepo
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(id);
      console.log(id);
      return;
    } else {
      console.log(id);
      addFavoriteRepo(id);
      return;
    }
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Dislike" : "Like"}
      </button>
    </div>
  );
};

export { CardRepo };
