import instance from "../utils/axios";

const getPopularMovies = async (id: number) =>
  await instance.get("/movie/popular", {
    params: {
      page: `${id}`,
    },
  });
const getDetailMovie = async (id: string) => await instance.get(`/movie/${id}`);

export { getPopularMovies, getDetailMovie };
