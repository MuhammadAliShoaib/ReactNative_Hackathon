import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import styles from '../../styling/styles';


const Splash = ({ navigation }: { navigation: any }) => {
    return (
        <View style={style.container}>

            <ImageBackground source={require("../Assets/cover.png")} resizeMode="cover" style={style.image} />
            <View style={[styles.bgWhite, styles.alignItemsCenter, styles.p5, { flex: 1, borderTopLeftRadius: 40, borderTopRightRadius: 40 }]}>
                <Text style={style.header}>Taskcy</Text>
                <Text style={[styles.textBlack, styles.mt4, styles.fs1, styles.textCenter, { fontWeight: '700' }]}>Building Better Workplaces</Text>
                <Text style={style.desc}>Create a unique emotional story that describes better than words</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Intro1")}
                    style={[
                        styles.p2,
                        styles.textBold,
                        { backgroundColor: '#756ef3', width: '90%' },
                        styles.rounded,
                        style.card,
                        styles.mt5,

                    ]}>
                    <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Splash;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#756ef3',
        flex: 1,
        height: "100%"
    },
    image: {
        flex: 1,
        height: 400
    },
    header: {
        color: "#756ef3",
        fontSize: 50,
        fontWeight: '800'
    },
    desc: {
        color: "#C0C0C0",
        textAlign: 'center',
        marginTop: 10
    },
    card: {
        shadowColor: '#756ef3',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 8,
        shadowOpacity: 0.8,
        elevation: 7,
        borderRadius: 15,
    },
});
