// app/index.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import LoginPage from './src/screen/Auth/Login/index';

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <LoginPage />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f3f9ed', 
  },
});
