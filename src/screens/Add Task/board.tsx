import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../../styling/styles';


const SMBoard = (props:any) => {
    
    const [selected, setSelected] = React.useState(1);

    const boarding = [
        {
            name: "Urgent"
        },
        {
            name: "Running"
        },
        {
            name: "Ongoing"
        },
    ]

    const handlePress = (i: any) => {
        setSelected(i)
        props.board(boarding[i].name)
    }


    return (
        <View>
            <Text style={style.labels}>Board</Text>
            <View style={[styles.flexRow, styles.justifyContentBetween]}>
                {boarding.map((x, i) => {
                    return (
                        <View key={i} style={[{ width: '30%' }]}>
                            <TouchableOpacity
                                onPress={() => handlePress(i)}
                                style={[
                                    styles.p1,
                                    styles.textBold,
                                    styles.border1,
                                    { borderRadius: 15, borderColor: selected == i ? "rgb(0 32 85)" : "#C0C0C0" }
                                ]}>
                                <Text style={{ color: selected == i ? "rgb(0 32 85)" : "#C0C0C0", fontSize: 15, textAlign: 'center' }}>
                                    {x.name}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        </View>
    );
};

export default SMBoard;

const style = StyleSheet.create({
    container: {},
    labels: {
        color: '#C0C0C0',
        fontSize: 15,
        marginBottom: 10,
    },
});
