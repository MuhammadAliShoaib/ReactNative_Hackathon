import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styling/styles';


const SMButton = (props:any) => {
    return (
        <View style={[styles.alignItemsCenter]}>
            <TouchableOpacity
                onPress={props.press}
                style={[
                    styles.p1,
                    styles.textBold,
                    { backgroundColor: '#756ef3' },
                    styles.rounded,
                    style.card,
                ]}>
                <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SMButton;

const style = StyleSheet.create({
    container: {},
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.8,
        elevation: 5,
        borderRadius: 10,
        marginVertical: 15,
    },
});
