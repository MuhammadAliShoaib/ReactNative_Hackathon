import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../styling/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Intro1 = ({ navigation }: { navigation: any }) => {
    return (
        <View style={style.container}>
            <ImageBackground source={require("../Assets/intro1.png")} resizeMode="cover" style={style.image} />
            <View style={[styles.bgWhite, styles.justifyContentBetween, { height: '40%', paddingHorizontal: 40 }]}>
                <View>
                    <Text style={style.header}>Task Management</Text>
                    <Text style={style.main}>Let's create a space for your workflows.</Text>
                </View>
                <View style={[styles.mb3, styles.justifyContentBetween, { flexDirection: 'row' }]}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                        <Text style={[styles.textBlack, styles.fs4]}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("Intro2")}>
                        <Icon name='arrow-forward' color="black" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Intro1;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        height: "100%"
    },
    image: {
        flex: 1,
        height: 500
    },
    header: {
        color: "#756ef3",
        fontSize: 25,
    },
    main: {
        color: 'black',
        fontSize: 40,
        marginTop: 10
    }
});
