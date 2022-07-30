import {Text, useThemeColor, View} from './Themed';
import MapView, {Marker} from 'react-native-maps';
import {Dimensions} from 'react-native';

const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
};

export function Box() {
    return <View style={{
        justifyContent: 'center',
        backgroundColor: useThemeColor({light: '#000', dark: '#333'}, 'background'),
        marginLeft: 18,
        marginRight: 18,
        paddingLeft: 30,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 10,
        alignSelf: 'stretch',
        borderRadius: 10
    }}>
        <Text lightColor="#fff" darkColor='#fff'>This is headline</Text>
        <MapView style={{width: Dimensions.get('window').width - 93, height: 200}} scrollEnabled={false} initialRegion={tokyoRegion}>
            <Marker coordinate={tokyoRegion}/>
        </MapView>
    </View>
}
