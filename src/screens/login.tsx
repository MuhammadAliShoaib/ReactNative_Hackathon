import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useFormik } from 'formik';
import { useContext, useEffect } from 'react';
import UserContext from '../config/contextAPI/userContext';
import { signupValidation } from '../config/validation/yupValidations';
import styles from '../styling/styles';
import SMInput from '../components/SMInput';
import Icon from 'react-native-vector-icons/MaterialIcons';


function Login({ navigation }: { navigation: any }) {

    const ctx = useContext(UserContext);


    const initialValues = {
        email: '',
        password: '',
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: signupValidation,
            onSubmit: values => {
                ctx.userLogin(values)
            },
        });

    return (
        <View style={[styles.p3]}>
            <View style={[styles.my3, styles.alignItemsCenter, styles.justifyContentBetween, { flexDirection: 'row', width: '62%' }]}>
                <TouchableOpacity style={style.circle} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" color='black' size={40} />
                </TouchableOpacity>
                <Text style={[styles.textBlack, styles.fs2]}>Sign in</Text>
            </View>
            <Text style={[styles.textBlack, styles.fs1, styles.textBold]}>Welcome Back</Text>
            <View>
                <Text style={style.desc}>Please enter your email address </Text>
                <Text style={style.desc}>and passoword for Login</Text>
            </View>
            <View style={[styles.my1]}>
                <View style={[styles.mt2]}>
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
                <View style={[styles.mt2]}>
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder="Enter Password"
                        placeholderTextColor="#57595A"
                        style={[style.inputs]}
                        secureTextEntry
                    />
                    {errors.password && touched.password ? (
                        <Text style={{ fontSize: 11, color: 'red' }}>
                            {errors.password}
                        </Text>
                    ) : null}
                </View>
                <View style={[styles.alignItemsEnd,styles.my2]}>
                    <Text style={[styles.textBold, styles.ms1, { fontSize: 15, color: 'black' }]}>Forgot Password?</Text>
                </View>
                <TouchableOpacity
                    onPress={() => handleSubmit}
                    style={[
                        styles.p1,
                        styles.textBold,
                        { backgroundColor: '#756ef3' },
                        styles.rounded,
                        style.card,
                    ]}>
                    <Text style={[styles.textWhite, styles.fs3, styles.textCenter]}>
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.justifyContentCenter, styles.flexRow,styles.my3]}>
                <Text style={[styles.textBlack, { fontSize: 15, color: "#8D8D8D" }]}>Not Register Yet?</Text>
                <Text onPress={() => navigation.goBack()} style={[styles.textBold, styles.ms1, { fontSize: 15, color: '#756ef3' }]}>Sign up</Text>
            </View>
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
        shadowColor: '#756ef3',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 8,
        shadowOpacity: 0.8,
        elevation: 7,
        borderRadius: 10,
    },
    desc: {
        color: "#C0C0C0",
        marginTop: 5
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
});

export default Login;
