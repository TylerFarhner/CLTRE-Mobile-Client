import React from 'react'
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'

export default function RegisterScreen(navData) {

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"} 
        style={{ flex: 1 }}>
            
                <Formik
                    initialValues={{
                        firstName: "",
                        email: "",
                        password: ""
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        navData.navigation.navigate('Home')
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
                                    placeholder="Full Name"
                                    placeholderTextColor="#fff"
                                    // state management
                                    onChangeText={props.handleChange('fullName')}
                                    // enable two way binding
                                    value={props.values.fullName}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    placeholderTextColor="#fff"
                                    keyboardType="email-address"
                                    // state management
                                    onChangeText={props.handleChange('email')}
                                    // enable two way binding
                                    value={props.values.email}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor="#fff"
                                    secureTextEntry={true}
                                    // state management
                                    onChangeText={props.handleChange('password')}
                                    // enable two way binding
                                    value={props.values.password}
                                />
                                <TouchableOpacity 
                                    style={styles.button}
                                    onPress={props.handleSubmit}
                                >
                                    <Text style={styles.buttonText}>Register</Text>
                                </TouchableOpacity>
                                <View style={styles.registerContainer}>
                                    <Text style={styles.registerText}>Have an account?</Text>
                                    <TouchableOpacity
                                        onPress={() => navData.navigation.navigate('Login')}
                                    >
                                        <Text style={styles.registerButton}>Login</Text>
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
        backgroundColor: "#ffffff",
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