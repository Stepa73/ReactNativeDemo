import {Dimensions, ScrollView, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SearchScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView style={{marginTop: 45}} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Search</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
