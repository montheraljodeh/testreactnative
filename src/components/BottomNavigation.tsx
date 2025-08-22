import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { designTokens } from '../designTokens';

interface BottomNavigationProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabPress,
}) => {
  const { colors } = useTheme();
  const { t, isRTL } = useLanguage();

  const tabs = [
    { key: 'home', icon: 'home', label: t('home') },
    { key: 'explore', icon: 'explore', label: t('explore') },
    { key: 'add', icon: 'add', label: '' },
    { key: 'events', icon: 'event', label: t('events') },
    { key: 'profile', icon: 'person', label: t('profile') },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.Background.White }]}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        const isAddButton = tab.key === 'add';

        if (isAddButton) {
          return (
            <TouchableOpacity
              key={tab.key}
              style={[
                styles.addButton,
                { backgroundColor: colors.Background.Black }
              ]}
              onPress={() => onTabPress(tab.key)}
            >
              <Icon
                name={tab.icon}
                size={32}
                color={colors.Icon.White}
              />
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onTabPress(tab.key)}
          >
            <Icon
              name={tab.icon}
              size={24}
              color={isActive ? colors.Icon.Primary : colors.Icon.Mid_Gray}
            />
            <Text
              style={[
                styles.tabLabel,
                {
                  color: isActive ? colors.Text.Primary : colors.Text.Mid_Gray,
                  textAlign: isRTL ? 'right' : 'left',
                }
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: designTokens.OptionTokens.Spacing.spacing_20px,
    paddingVertical: designTokens.OptionTokens.Spacing.spacing_16px,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: designTokens.OptionTokens.Radius.Full,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tabLabel: {
    fontSize: designTokens.OptionTokens.Typography.Size.text_size_12,
    marginTop: designTokens.OptionTokens.Spacing.spacing_4px,
    fontWeight: '400',
  },
});