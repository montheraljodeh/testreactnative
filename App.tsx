import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import { LanguageProvider } from './src/context/LanguageContext';
import { AddCarToGarage } from './src/screens/AddCarToGarage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
          <AddCarToGarage />
        </SafeAreaView>
      </LanguageProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
