import { StackScreenProps } from "@react-navigation/stack";
import { Text } from "react-native"
import { RootStackParams } from "../../navigation/StackNavigator";
import { useMovie } from "../../hooks/useMovie";
import { MovieDetails, MovieHeader } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";

interface Props extends StackScreenProps<RootStackParams, 'Details'> { };

export const DetailScreen = ({ route }: Props) => {

  const { movieId } = route.params;

  const { movie, isLoading, cast } = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />
  }


  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie?.originalTitle!}
        title={movie?.title!}
        poster={movie?.poster!}
      />

      <MovieDetails 
      movie={movie!} cast={cast!}
      />
    </ScrollView>
  )
}


