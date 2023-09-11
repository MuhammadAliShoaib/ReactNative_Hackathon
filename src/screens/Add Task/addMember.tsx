import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styling/styles';
import SMDialog from '../../components/SMDialog';


const AddMember = (props:any) => {

    
    const [showModal, setShowModal] = React.useState(false);

    return (
        <View style={style.container}>
            <View style={[styles.my2]}>
                <View>
                    <Text style={[style.labels]}>Team Member</Text>
                    <TouchableOpacity style={[style.circle, { borderColor: "#756ef3" }]} onPress={() => setShowModal(true)}>
                        <Icon name="add" color='#756ef3' size={40} />
                    </TouchableOpacity>
                </View>
            </View>

            {showModal &&
                <SMDialog>
                    <Text style={style.title}>Modal</Text>
                    <Text style={style.message}>Showing Modal</Text>
                </SMDialog>
            }
        </View>
    );
};

export default AddMember;

const style = StyleSheet.create({
    container: {},
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
    }
});
