import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import UserContext from '../config/contextAPI/userContext';
import { signupValidation } from '../config/validation/yupValidations';
import styles from '../styling/styles';
import SMInput from '../components/SMInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';


function Signup({ navigation }: { navigation: any }) {

    const ctx = useContext(UserContext);
    const [activity, setActivity] = useState(false)

    let api = "https://task-app-backend-three.vercel.app/api/users"

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: signupValidation,
            onSubmit: values => {
                setActivity(true)
                sendData(values);
            },
        });

    let sendData = (values: any) => {
        axios.post(api, values)
            .then((res) => {
                setActivity(false)
                console.log("User logged in successfully")
                ctx.userLogin(values);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <View style={[activity? style.loader: style.signup]}>
            {activity ? <ActivityIndicator size={30} color={'#756ef3'} /> :
                <View>
                    <View style={[styles.my3, styles.alignItemsCenter, styles.justifyContentBetween, { flexDirection: 'row' }]}>
                        <TouchableOpacity style={style.circle} onPress={() => navigation.goBack()}>
                            <Icon name="chevron-left" color='black' size={40} />
                        </TouchableOpacity>
                        <Text style={[styles.textBlack, styles.fs2]}>Sign Up</Text>
                        <View style={[styles.bgBlack, styles.ms2]}></View>
                    </View>
                    <Text style={[styles.textBlack, styles.fs1, styles.textBold]}>Create Account</Text>
                    <View>
                        <Text style={style.desc}>Please enter your information and </Text>
                        <Text style={style.desc}>create your account</Text>
                    </View>
                    <View style={[styles.my4]}>
                        <View style={[styles.mt1]}>
                            <SMInput
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                placeholder="Enter Name"
                                ViewStyle={[styles.mt2]}
                            />
                            {errors.name && touched.name ? (
                                <Text style={{ fontSize: 11, color: 'red' }}>{errors.name}</Text>
                            ) : null}
                        </View>
                        <View style={[styles.my4]}>
                            <SMInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="Enter Email"

                                ViewStyle={[styles.mt2]}
                            />
                            {errors.email && touched.email ? (
                                <Text style={{ fontSize: 11, color: 'red' }}>{errors.email}</Text>
                            ) : null}
                        </View>
                        <View style={[styles.mb3]}>
                            <TextInput
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder="Enter Password"
                                placeholderTextColor="#C0C0C0"
                                style={[style.inputs]}
                                secureTextEntry
                            />
                            {errors.password && touched.password ? (
                                <Text style={{ fontSize: 11, color: 'red' }}>
                                    {errors.password}
                                </Text>
                            ) : null}
                        </View>
                        <TouchableOpacity
                            onPress={() => handleSubmit()}
                            style={[
                                styles.p1,
                                styles.textBold,
                                { backgroundColor: '#756ef3' },
                                styles.rounded,
                                style.card,
                            ]}>
                            <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>
                                Sign up
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.justifyContentCenter, styles.flexRow, styles.my3]}>
                        <Text style={[styles.textBlack, { fontSize: 15, color: "#8D8D8D" }]}>Have an Account?</Text>
                        <Text onPress={() => navigation.navigate("Login")} style={[styles.textBold, styles.ms1, { fontSize: 15, color: '#756ef3' }]}>Sign In</Text>
                    </View>
                </View>
            }
        </View>
    );
}

const style = StyleSheet.create({
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
    },
    circle: {
        width: 50, // Adjust the circle size as needed
        height: 50,
        borderRadius: 40, // Half of the width/height to make it a circle,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    desc: {
        color: "#C0C0C0",
        marginTop: 5
    },
    signup:{
        padding:30
    },
    loader:{
        flex:1,
        padding:30,
        justifyContent: 'center',
    }
});

export default Signup;
