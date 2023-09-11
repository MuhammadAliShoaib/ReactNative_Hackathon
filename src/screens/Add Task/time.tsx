import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../../styling/styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const SMTime = (props: any) => {

    const [currentTime, setCurrentTime] = React.useState(new Date());
    const [isVisible, setVisibility] = React.useState(false);

    const handleTimeConfirm = (changeTime: any) => {
        props.set(changeTime)
        setVisibility(false);
    };

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={[{ width: '45%' }]}>
            <Text style={style.labels}>{props.title}</Text>
            <TouchableOpacity
                onPress={() => setVisibility(true)}
                style={[
                    styles.p2,
                    styles.textBold,
                    styles.border1,
                    { borderRadius: 15 }
                ]}>
                <Text style={{ color: "rgb(0 32 85)", fontSize: 15 }}>
                    {props.time.toLocaleTimeString(undefined, {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true, // Use 12-hour format
                    })}
                </Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={() => setVisibility(false)}
            />
        </View>
    );
}

export default SMTime;

const style = StyleSheet.create({
    container: {},
    labels: {
        color: '#C0C0C0',
        fontSize: 15,
        marginBottom: 10,
    },
});
