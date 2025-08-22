import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../designTokens';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
}) => {
  const { colors } = useTheme();
  const { isRTL } = useLanguage();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          {
            color: colors.Text.Black,
            textAlign: isRTL ? 'right' : 'left',
          }
        ]}
      >
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: colors.Background.Light_100_Gray,
            textAlign: isRTL ? 'right' : 'left',
            color: colors.Text.Black,
          }
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.Text.Mid_Gray}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: designTokens.OptionTokens.Spacing.spacing_24px,
  },
  label: {
    fontSize: designTokens.OptionTokens.Typography.Size.text_size_16,
    fontWeight: '600',
    marginBottom: designTokens.OptionTokens.Spacing.spacing_8px,
  },
  input: {
    height: 48,
    borderRadius: designTokens.OptionTokens.Radius.Radius_12,
    paddingHorizontal: designTokens.OptionTokens.Spacing.spacing_16px,
    fontSize: designTokens.OptionTokens.Typography.Size.text_size_16,
  },
});