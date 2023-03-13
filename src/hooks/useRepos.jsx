import { useQuery } from "@tanstack/react-query";

const baseURL = "https://api.github.com/users/AChapeton/repos";

const fetchRepos = async () => {
  const res = await fetch(baseURL);
  const data = await res.json();
  return data;
};

const useFetchRepos = () => {
  //3. useQuery pide un nombre con el que se manejara la data y la funcion que hace el llamado a la API
  return useQuery(["repos"], fetchRepos);
};

export { useFetchRepos };
