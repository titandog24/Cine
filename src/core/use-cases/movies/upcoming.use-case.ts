import { HttpAdapter } from "../../../config/adapter/http/http.adapter";
import { NowPlayingResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mapper/movie.mapper";
import { Movie } from "../../entities/movie.entity";


export const upcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const upcomingMovie = await fetcher.get<NowPlayingResponse>('/upcoming');        
        
        return upcomingMovie.results.map(result => MovieMapper.fromMovieResultToEntity(result));

    } catch (error) {
        throw new Error("Error fetching upcomingUseCase");
        
    }
}