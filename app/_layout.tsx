// app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView, StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    // Зазвичай, SafeAreaView найкраще використовувати в самому компоненті, 
    // але для верхнього рівня його можна залишити.
    // Також додамо StatusBar для кращого вигляду
    <SafeAreaView style={{ flex: 1 }}> 
      <StatusBar barStyle="dark-content" />
      {/* 💡 Виправлення: Stack управляє навігацією та відображає правильний маршрут.
        Користувач почне з app/index.tsx (маршрут /).
      */}
      <Stack
        screenOptions={{
          headerShown: false, // Приховати стандартний заголовок Stack
        }}
      >
        {/* Додаткові налаштування тут */}
      </Stack>
    </SafeAreaView>
  );
}
