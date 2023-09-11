import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import styles from '../../styling/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Add = ({ navigation }: { navigation: any }) => {

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddTask")}
        style={[
          styles.p1,
          styles.textBold,
          { backgroundColor: '#756ef3' },
          styles.rounded,
          style.card,
          styles.m4
        ]}>
        <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>
          Add Project
        </Text>
      </TouchableOpacity>
    </>
  )

};
export default Add;


const style = StyleSheet.create({
  card: {
    shadowColor: '#756ef3',
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.8,
    elevation: 7,
    borderRadius: 10,
  },
})
