import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const fontAssets = {
    // 400
    'Inter-Regular': require('../assets/fonts/Inter_Regular.ttf'),
    // 600
    'Inter-SemiBold': require('../assets/fonts/Inter_SemiBold.ttf'), 
    'Inter-SemiBoldItalic': require('../assets/fonts/Inter_SemiBoldItalic.ttf'),
    // 700
    'Inter-Bold': require('../assets/fonts/Inter_Bold.ttf'), 
    'Inter-BoldItalic': require('../assets/fonts/Inter_BoldItalic.ttf'),
};

export const useLoadedFonts = () => {
    const [fontsLoaded, error] = useFonts(fontAssets);

    if (fontsLoaded) {
        SplashScreen.hideAsync();
    }
    
    if (error) {
        console.error("Font loading error:", error);
    }
    
    return { fontsLoaded, error };
};
