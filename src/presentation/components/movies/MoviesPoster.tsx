import { Image, Pressable, StyleSheet, View } from "react-native"
import { Movie } from '../../../core/entities/movie.entity';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/StackNavigator";

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviesPoster = ({ movie, height = 420, width = 300 }: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Pressable
        onPress={()=> navigation.navigate('Details', {movieId: movie.id})}
        style={ ({pressed}) =>({
            width,
            height,
            marginHorizontal: 3,
            paddingBottom: 20,
            paddingHorizontal: 7,
            opacity: (pressed) ? 0.7 : 1
        })}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: movie.poster }} />
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9
    }
})