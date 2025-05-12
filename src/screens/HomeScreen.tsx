import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../theme/theme";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Make Waves</Text>
            <Text style={styles.subtitle}>Your new Expo app is ready!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
        padding: theme.spacing.md,
    },
    title: {
        ...theme.typography.h1,
        color: theme.colors.primary,
        marginBottom: theme.spacing.sm,
    },
    subtitle: {
        ...theme.typography.body,
        color: theme.colors.textSecondary,
    },
});

export default HomeScreen;
