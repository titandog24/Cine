import { HttpAdapter } from "../../../config/adapter/http/http.adapter";
import { NowPlayingResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mapper/movie.mapper";
import { Movie } from "../../entities/movie.entity";

interface Options {
    page?: number,
    limit?: number;
}


export const popularMoviesUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const popularMovie = await fetcher.get<NowPlayingResponse>('/popular', {
            params: {
                page: options?.page ?? 1
            }
        });

        return popularMovie.results.map(result => MovieMapper.fromMovieResultToEntity(result));

    } catch (error) {
        throw new Error("Error fetching popularMoviesUseCase");

    }
}