import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { designTokens } from '../designTokens';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: colors.Background.Primary,
        }
      ]}
      onPress={toggleLanguage}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.text,
          { color: colors.Text.White }
        ]}
      >
        {language === 'en' ? 'عربي' : 'EN'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 20,
    paddingHorizontal: designTokens.OptionTokens.Spacing.spacing_16px,
    paddingVertical: designTokens.OptionTokens.Spacing.spacing_8px,
    borderRadius: designTokens.OptionTokens.Radius.Full,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: designTokens.OptionTokens.Typography.Size.text_size_14,
    fontWeight: '600',
  },
});