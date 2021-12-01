import React from 'react'
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'

import * as authAction from '../redux/actions/authAction'

const formSchema = yup.object({
    // Want to validate email and PW using Yup
    email: yup.string().email().required(),
    password: yup.string().required().min(6)
})

export default function LoginScreen(navData) {

    const dispatch = useDispatch()

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"} 
        style={{ flex: 1 }}>
            
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={ formSchema }
                    onSubmit={(values) => {
                        // console.log(values)
                        dispatch(authAction.loginUser(values))
                            .then(() => {
                                navData.navigation.navigate('Home')
                            })
                            .catch(err => console.log(err))
                        
                    }}
                >
                    {(props) => (
                        <View style={styles.container}>
                            <View style={styles.logo}>
                                <Image source={require('../assets/images/MobileLogo.png')} style={styles.image}/>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    placeholderTextColor="#fff"
                                    keyboardType="email-address"
                                    // state management
                                    onChangeText={props.handleChange('email')}
                                    // enable two way binding
                                    value={props.values.email}
                                    onBlur={ props.handleBlur('email') }
                                />
                                <Text style={styles.error}>{props.touched.email && props.errors.email}</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor="#fff"
                                    secureTextEntry={true}
                                    // state management
                                    onChangeText={props.handleChange('password')}
                                    // enable two way binding
                                    value={props.values.password}
                                    onBlur={ props.handleBlur('password') }
                                />
                                <Text style={styles.error}>{props.touched.password && props.errors.password}</Text>
                                <TouchableOpacity 
                                    style={styles.button}
                                    onPress={props.handleSubmit}
                                >
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                                <View style={styles.registerContainer}>
                                    <Text style={styles.registerText}>Don't have an account?</Text>
                                    <TouchableOpacity
                                        onPress={() => navData.navigation.navigate('Register')}
                                    >
                                        <Text style={styles.registerButton}>Register</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}

                </Formik>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    logo: {
        alignItems: "center",
        marginBottom: 40,
    },
    image: {
        width: 200,
        height: 100,
    },
    input: {
        width: 300,
        backgroundColor: "#B6BFC4",
        borderRadius: 25,
        padding: 16,
        fontSize: 16,
        marginVertical: 10,
    },
    button: {
        width: 300,
        backgroundColor: "#738289",
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#ffffff",
        textAlign: "center",
    },
    registerContainer: {
        alignItems: "flex-end",
        justifyContent: "center",
        paddingVertical: 16,
        flexDirection: "row",
    },
    registerText: {
        color: "#738289",
        fontSize: 16,
    },
    registerButton: {
        color: "#738289",
        fontSize: 16,
        fontWeight: "bold",
    },
    error: {
        color: 'red'
    }
});