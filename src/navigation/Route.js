import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/login/LoginScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function Route() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Welcome to Login'}} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Welcome to Profile'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}