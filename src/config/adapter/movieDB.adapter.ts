import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: 'b9c84fd41218d5a5c81d51168b61dd79',
        api_key: THE_MOVIE_DB_KEY ?? 'no key',
        language: 'es'
    }
});