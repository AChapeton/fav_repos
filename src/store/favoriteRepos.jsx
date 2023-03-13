import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoriteRepos = create(
  persist(
    (set) => ({
      favoriteReposId: [],
      addFavoriteRepo: (id) =>
        set((state) => ({
          favoriteReposId: [...state.favoriteReposId, id],
        })),
      removeFavoriteRepo: (id) =>
        set((state) => ({
          favoriteReposId: state.favoriteReposId.filter(
            (repoId) => repoId !== id
          ),
        })),
    }),
    { name: "FAV_REPOS_V1" }
  )
);

export { useFavoriteRepos };
