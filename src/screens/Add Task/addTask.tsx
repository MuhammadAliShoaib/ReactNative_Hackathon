import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import styles from '../../styling/styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddMember from './addMember';
import SMDate from './date';
import SMTime from './time';
import SMBoard from './board';
import SMButton from '../../components/SMButton';



const AddTask = ({ navigation }: { navigation: any }) => {

    const [date, setDate] = React.useState<Date>(new Date())
    const [taskName, setTaskName] = React.useState<String>("");
    const [startTime, setStartTime] = React.useState<Date>(new Date())
    const [endTime, setEndTime] = React.useState<Date>(new Date())
    const [board, setBoard] = React.useState<any>("Running");
    const [members,setMembers] = React.useState<any>([]) 

    const initialValues = {
        taskName: taskName,
        date: date,
        startTime: startTime,
        endTime: endTime,
        board: board,
        members : members
    }


    let handleSubmit = () => {
        console.log(initialValues)
        if (!initialValues.taskName) {
            ToastAndroid.show("Enter Task Name please", ToastAndroid.SHORT);
            return;
        } else if (!initialValues.endTime) {
            ToastAndroid.show("Enter End Time", ToastAndroid.SHORT);
            return;
        }
    }

    return (
        <View style={style.container}>
            <View style={[styles.my2, styles.alignItemsCenter, styles.justifyContentBetween, { flexDirection: 'row' }]}>
                <TouchableOpacity style={style.circle} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" color='black' size={40} />
                </TouchableOpacity>
                <Text style={[styles.textBlack, styles.fs2]}>Add Task</Text>
                <View style={[styles.bgBlack, styles.ms2]}></View>
            </View>

            <View>
                <Text style={style.labels}>Date</Text>
                <TextInput onChangeText={(event) => setTaskName(event)} style={[style.inputs]} placeholder='Enter Task Name'
                    placeholderTextColor="#C0C0C0" />
            </View>

            <AddMember />

            <SMDate set={setDate} date={date} />

            <View style={[styles.my2, styles.flexRow, styles.justifyContentBetween]}>
                <SMTime time={startTime} set={setStartTime} title="Start Time" />
                <SMTime time={endTime} set={setEndTime} title="End Time" />
            </View>

            <SMBoard board={setBoard} />

            <View style={[styles.alignItemsCenter]}>
                <TouchableOpacity
                    onPress={handleSubmit}
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

            {/* <SMButton press={handleSubmit}/> */}
        </View>
    );
};

export default AddTask;

const style = StyleSheet.create({
    container: {
        padding: 30
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 40,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labels: {
        color: '#C0C0C0',
        fontSize: 15,
        marginBottom: 10,
    },
    inputs: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        color: 'black',
        padding: 15
    },
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.8,
        elevation: 5,
        borderRadius: 10,
        marginVertical: 15,
        width: '60%'
    },
});
