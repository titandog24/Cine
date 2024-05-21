
import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entity'
import { Formater } from '../../../config/helpers/formatter'
import { Cast } from '../../../core/entities/cast.entity'
import { FlatList } from 'react-native-gesture-handler';
import { CastActores } from '../cast/CastActores';

interface Props {
    movie: FullMovie,
    cast: Cast[]
}

export const MovieDetails = ({ movie, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{movie.rating}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movie.genres.join(', ')}
                    </Text>
                </View>
                <Text style={{
                    fontSize: 23,
                    marginTop: 10,
                    fontWeight: 'bold'
                }}>Historia</Text>
                <Text style={{ fontSize: 16 }}>
                    {movie.description}
                </Text>
                <Text style={{
                    fontSize: 23,
                    marginTop: 10, 
                    fontWeight: 'bold'}}>
                        Presupuesto
                </Text>
                <Text style={{fontSize: 18}}>
                    {Formater.currency(movie.budget)}
                </Text>

                <View style={{marginTop: 10, marginBottom: 50}}>
                    <Text style={{
                        fontSize:23,
                        marginVertical: 10,
                        fontWeight:'bold',
                    }}>
                        Actores
                    </Text>
                    <FlatList 
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <CastActores actor={item} />}
                    />    
                </View>
            </View>
        </>
    )
}

