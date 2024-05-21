import { Text, View } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel, HorizontalCarrusel } from "../../components";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upComming, popularNextPage} = useMovies();
    
  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView>
      <View
        style={{marginTop: top +20, paddingBottom: 30}}>
          <PosterCarousel movies={nowPlaying}/>
          <HorizontalCarrusel 
          movies={popular} 
          title="Populares"
          loadNextPage={popularNextPage}/>
          <HorizontalCarrusel movies={topRated} title="Mejor Calificadas"/>
          <HorizontalCarrusel movies={upComming} title="Próximamente"/>
        </View>
    </ScrollView>
  )
}


