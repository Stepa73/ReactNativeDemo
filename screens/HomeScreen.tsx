import {Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import {Box} from '../components/Box';

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        //backgroundColor: '#232323'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
