import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SMModal from '../../components/SMModal';
import styles from '../../styling/styles';



const Home = ({ visible }: { visible: any }) => {

  return (
    <View style={style.container}>
      <Text style={[styles.textBlack]}> Home</Text>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {}
});
