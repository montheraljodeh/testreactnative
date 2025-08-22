import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../designTokens';
import { Header } from '../components/Header';
import { FileUpload } from '../components/FileUpload';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { BottomNavigation } from '../components/BottomNavigation';
import { ThemeToggle } from '../components/ThemeToggle';
import { LanguageToggle } from '../components/LanguageToggle';

export const AddCarToGarage: React.FC = () => {
  const { colors } = useTheme();
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('events');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBackPress = () => {
    Alert.alert('Back', 'Go back to previous screen');
  };

  const handleBrowsePress = () => {
    Alert.alert('Browse', 'Open file picker');
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'add') {
      // Handle add car action
      Alert.alert('Add Car', 'Navigate to add car screen');
    }
  };

  const handleNextPress = () => {
    if (!carName.trim() || !carModel.trim() || !year.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Car added successfully!');
    }, 2000);
  };

  return (
    <View style={[
      styles.container,
      { backgroundColor: colors.Background.White }
    ]}>
      <Header
        title={t('addCarToGarage')}
        onBackPress={handleBackPress}
      />

      <ThemeToggle />
      <LanguageToggle />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <FileUpload onBrowsePress={handleBrowsePress} />

        <InputField
          label={t('carName')}
          placeholder={t('carNamePlaceholder')}
          value={carName}
          onChangeText={setCarName}
        />

        <InputField
          label={t('carModel')}
          placeholder={t('carModelPlaceholder')}
          value={carModel}
          onChangeText={setCarModel}
        />

        <InputField
          label={t('year')}
          placeholder={t('yearPlaceholder')}
          value={year}
          onChangeText={setYear}
        />

        <Button
          title={t('next')}
          onPress={handleNextPress}
          loading={loading}
          disabled={loading}
        />
      </ScrollView>

      <BottomNavigation
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: designTokens.OptionTokens.Spacing.spacing_20px,
    paddingBottom: designTokens.OptionTokens.Spacing.spacing_100px,
  },
});