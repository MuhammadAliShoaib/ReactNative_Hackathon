import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import styles from '../styling/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Add = () => {


  const [visible, setVisible] = React.useState(true)

  return (
    <View style={style.container}>
      <Modal isVisible={visible} style={style.modal}>
        <View style={style.modalView}>
          <TouchableOpacity style={style.box}>
            <Icon name='edit-square' color={"rgb(0 32 85)"} size={30} />
            <View>
              <Text style={style.text}>Create Task</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.box}>
            <Icon name='add-circle' color={"rgb(0 32 85)"} size={30} />
            <View>
              <Text style={style.text}>Create Project</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.box}>
            <Icon name='groups' color={"rgb(0 32 85)"} size={30} />
            <View>
              <Text style={style.text}>Create Team</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(false)} style={[styles.alignItemsCenter, styles.my1]}>
            <View style={style.circle}>
              <Icon name="add" color='#fff' size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Add;

const style = StyleSheet.create({
  container: {},
  modal: {
    width: '100%',
    marginLeft: 0,
    marginBottom: 0,
    backgroundColor: 'rgba(255,255,255,0.5)'

  },
  modalView: {
    position: 'absolute',
    height: 400,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 35,
    bottom: 0,
    right: 0,
    left: 0,
    padding: 30,
  },
  box: {
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  text: {
    color: "rgb(0 32 85)",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '500'
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 40,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#756ef3",
    marginBottom: 20,
    shadowColor: '#756ef3',
    shadowOffset: { width: 5, height: 3 },
    shadowRadius: 40,
    shadowOpacity: 0.8,
    elevation: 5,
  },
});
