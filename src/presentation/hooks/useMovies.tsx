import { useEffect, useState } from "react"
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapter/movieDB.adapter";
import { upcomingUseCase } from '../../core/use-cases/movies/upcoming.use-case';

export const useMovies = () => {
    let popularPage = 1;
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [upComming, setUpComming] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        initalLoag();
    }, [])
    
    const initalLoag = async () => {
        const nowPlayPromise = UseCases.moviesNosPlayingUseCase(movieDBFetcher);
        const popularPromise = UseCases.popularMoviesUseCase(movieDBFetcher);
        const topRatedPromise = UseCases.topRatedUseCase(movieDBFetcher);
        const upComingPromise = UseCases.upcomingUseCase(movieDBFetcher);

        const [
          nowPlayingMovies,
          popularMovies,
          TopRatedMovies,
          upcomingMovies
        ] = await Promise.all([
          nowPlayPromise,
          popularPromise,
          topRatedPromise,
          upComingPromise
        ]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(TopRatedMovies);
        setUpComming(upcomingMovies);

        setIsLoading(false);
    }
  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upComming,

    popularNextPage: async () => {
      popularPage++;
      const popularMovies = await UseCases.popularMoviesUseCase(movieDBFetcher,
        {page: popularPage});
      setPopular(prev => [...prev, ...popularMovies])
    }
  }
}
