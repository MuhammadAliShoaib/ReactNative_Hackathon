import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  GestureHandlerRootView,

} from 'react-native-gesture-handler';
import { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import styles from '../../styling/styles';
import SMDialog from '../../components/SMDialog';


function Profile() {
  const [imgUri, setImgUri] = useState<any>(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyUW4SBni8aG-yrhj471NhuedjBoklkLNXsBwQBo7tQ&s',
  );

  const [showModal, setShowModal] = useState(false);

  let openCamera = async () => {
    try {
      const result: any = await launchCamera({
        mediaType: 'photo',
      });
      if (result && result.assets && result.assets.length > 0) {
        setImgUri(result.assets[0].uri);
      }
    } catch (err) {
      console.log(err)
    }
  };

  let openGallery = async () => {
    try {
      const result: any = await launchImageLibrary({
        mediaType: 'photo',
      });
      if (result && result.assets && result.assets.length > 0) {
        setImgUri(result.assets[0].uri);
      }
    } catch (err) {
      console.log(err)
    }
  };


  let closeModal = () => {
    setShowModal(false);
  };

  return (
    <GestureHandlerRootView>
      {showModal &&
        <SMDialog>
          <Text style={style.title}>Modal</Text>
          <Text style={style.message}>Showing Modal</Text>
          <TouchableOpacity onPress={openCamera} style={[styles.bgSuccess, styles.p1, styles.rounded, styles.my1]}>
            <Text style={[styles.textCenter, styles.textWhite, styles.textBold]}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openGallery} style={[styles.bgSuccess, styles.p1, styles.rounded, styles.my1]}>
            <Text style={[styles.textCenter, styles.textWhite, styles.textBold]}>Open Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={closeModal}>
            <Text style={style.buttonText}>Close</Text>
          </TouchableOpacity>
        </SMDialog>
      }
      <View style={[styles.alignItemsCenter]}>
        <View
          style={[
            styles.my3,
            {
              width: 150,
              height: 150,
              borderRadius: 75,
              backgroundColor: 'white',
            },
            style.image,
          ]}>
          <Image
            style={{ width: '100%', height: '100%', borderRadius: 75 }}
            source={{ uri: imgUri }}
          />
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={[
              { width: 50, height: 50, borderRadius: 25 },
              styles.bgTransparent,
              styles.justifyContentCenter,
              style.camera,
            ]}>
            <Icon
              style={[styles.textCenter]}
              name="photo-camera"
              color="black"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>

    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  image: {
    position: 'relative',
  },
  camera: {
    bottom: 30,
    left: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black'
  },
  message: {
    fontSize: 16,
    marginBottom: 16,
    color: 'black'
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

export default Profile;
