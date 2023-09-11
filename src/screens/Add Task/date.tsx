import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../../styling/styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const SMDate = (props:any) => {
    
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const handleDateConfirm = (changedDate: Date) => {
        props.set(changedDate)
        setDatePickerVisibility(false);
    };

    return (
        <View>
            <Text style={style.labels}>Date</Text>
            <TouchableOpacity
                onPress={() => setDatePickerVisibility(true)}
                style={[
                    styles.p2,
                    styles.textBold,
                    styles.border1,
                    { borderRadius: 15 }
                ]}>
                <Text style={{ color: "rgb(0 32 85)", fontSize: 15 }}>
                    {props.date.toLocaleDateString()}
                </Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={() => setDatePickerVisibility(false)}
            />
        </View>
    );
};

export default SMDate;

const style = StyleSheet.create({
    container: {},
    labels: {
        color: '#C0C0C0',
        fontSize: 15,
        marginBottom: 10,
    },
});
