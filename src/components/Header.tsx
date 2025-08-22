import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../designTokens';

interface HeaderProps {
  title: string;
  onBackPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onBackPress }) => {
  const { colors } = useTheme();
  const { isRTL } = useLanguage();

  return (
    <View style={[styles.container, { backgroundColor: colors.Background.White }]}>
      <StatusBar
        barStyle={colors === colors.Background.White ? 'dark-content' : 'light-content'}
        backgroundColor={colors.Background.White}
      />
      
      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: colors.Background.Primary }]}
        onPress={onBackPress}
      >
        <Icon
          name={isRTL ? 'arrow-forward' : 'arrow-back'}
          size={24}
          color={colors.Icon.White}
        />
      </TouchableOpacity>

      <Text style={[
        styles.title,
        {
          color: colors.Text.Black,
          textAlign: isRTL ? 'right' : 'left',
        }
      ]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: designTokens.OptionTokens.Spacing.spacing_20px,
    paddingVertical: designTokens.OptionTokens.Spacing.spacing_16px,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: designTokens.OptionTokens.Radius.Full,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: designTokens.OptionTokens.Spacing.spacing_16px,
  },
  title: {
    fontSize: designTokens.OptionTokens.Typography.Size.text_size_24,
    fontWeight: 'bold',
    flex: 1,
  },
});