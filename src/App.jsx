import { useFetchRepos } from "./hooks/useRepos";
import { useFavoriteRepos } from "./store/favoriteRepos";
import { CardRepo } from "./modules/CardRepo";

function App() {
  //4. Se llama al hook de React Query
  const { data, isLoading, isError } = useFetchRepos();
  const { favoriteReposId } = useFavoriteRepos();

  if (isLoading) return <div>Loading...</div>;
  console.log(data);

  return (
    <div>
      {data.map((repo) => (
        <CardRepo
          key={repo.id}
          id={repo.id}
          name={repo.name}
          isFavorite={favoriteReposId.includes(repo.id)}
        />
      ))}
    </div>
  );
}

export default App;
