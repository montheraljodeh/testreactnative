import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { designTokens } from '../designTokens';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
}) => {
  const { colors } = useTheme();

  const buttonStyle = [
    styles.button,
    {
      backgroundColor: variant === 'primary' 
        ? colors.Background.Primary 
        : colors.Background.Light_100_Gray,
      opacity: disabled ? 0.6 : 1,
    }
  ];

  const textStyle = [
    styles.buttonText,
    {
      color: variant === 'primary' 
        ? colors.Text.White 
        : colors.Text.Black,
    }
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? colors.Text.White : colors.Text.Black}
          size="small"
        />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: designTokens.OptionTokens.Radius.Full,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: designTokens.OptionTokens.Spacing.spacing_32px,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: designTokens.OptionTokens.Typography.Size.text_size_18,
    fontWeight: '600',
  },
});