import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styling/styles';

const SMDialog = (props) => {
  return (
    <Modal visible={true} animationType="fade" transparent>
      <View style={style.modalContainer}>
        <View style={style.dialogContainer}>
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'black'
  },
  message: {
    fontSize: 16,
    marginBottom: 16,
    color:'black'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SMDialog;
