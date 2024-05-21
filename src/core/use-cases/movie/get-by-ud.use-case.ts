import { HttpAdapter } from "../../../config/adapter/http/http.adapter";
import { MovieDBMovie } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mapper/movie.mapper";
import { FullMovie } from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
    fetcher: HttpAdapter,
    movieId: number
): Promise<FullMovie> => {
    try {
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`)
        const fullMovie = MovieMapper.formMovieDBToEntity(movie);
        return fullMovie;
    } catch (error) {
      throw new Error("Cannot get movie by id "+movieId.toString());

    }
};