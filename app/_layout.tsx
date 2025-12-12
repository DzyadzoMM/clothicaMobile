// app/_layout.tsx
import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useLoadedFonts } from '../hooks/useLoadedFonts';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const { fontsLoaded, error } = useLoadedFonts(); 

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerShown: false, 
        }}
      >
      </Stack>
    </SafeAreaView>
  );
}
