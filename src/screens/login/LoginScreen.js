import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import generalStyles from "../../styles/GeneralStyles"
import logo from "../../../assets/accenture.png"

const LoginScreen = ({ navigation, route }) => {
    const [text, setText] = useState('');
    return (
        <View style={generalStyles.container}>
            <Image source={logo} style={styles.logo}/>
            <Text>Login Screen</Text>
            <TextInput style={styles.input}
                value={text}
                onChangeText={setText}
            />
            <Text>{text}</Text>
            <Button
                title="Go To Profile"
                onPress={() =>
                    navigation.navigate('Profile', {
                        user: text,
                    })
                }
            />

        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#ffffff"
    },
    logo: {
        width: 300,
        height: 150
    }
});

export default LoginScreen;