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

interface FileUploadProps {
  onBrowsePress: () => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onBrowsePress }) => {
  const { colors } = useTheme();
  const { t, isRTL } = useLanguage();

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
        {t('carImageOrModel')}
      </Text>
      
      <View
        style={[
          styles.uploadArea,
          {
            backgroundColor: colors.Background.Light_Primary,
            borderColor: colors.Border.Primary,
          }
        ]}
      >
        <Icon
          name="photo-library"
          size={48}
          color={colors.Icon.Primary}
          style={styles.uploadIcon}
        />
        
        <TouchableOpacity
          style={[
            styles.browseButton,
            { backgroundColor: colors.Background.Primary }
          ]}
          onPress={onBrowsePress}
        >
          <Text
            style={[
              styles.browseButtonText,
              { color: colors.Text.White }
            ]}
          >
            {t('browseFile')}
          </Text>
        </TouchableOpacity>
        
        <Text
          style={[
            styles.description,
            {
              color: colors.Text.Mid_Gray,
              textAlign: isRTL ? 'right' : 'left',
            }
          ]}
        >
          {t('uploadDescription')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: designTokens.OptionTokens.Spacing.spacing_32px,
  },
  label: {
    fontSize: designTokens.OptionTokens.Typography.Size.text_size_18,
    fontWeight: '600',
    marginBottom: designTokens.OptionTokens.Spacing.spacing_16px,
  },
  uploadArea: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: designTokens.OptionTokens.Radius.Radius_20,
    padding: designTokens.OptionTokens.Spacing.spacing_32px,
    alignItems: 'center',
    minHeight: 200,
  },
  uploadIcon: {
    marginBottom: designTokens.OptionTokens.Spacing.spacing_24px,
  },
  browseButton: {
    paddingHorizontal: designTokens.OptionTokens.Spacing.spacing_24px,
    paddingVertical: designTokens.OptionTokens.Spacing.spacing_12px,
    borderRadius: designTokens.OptionTokens.Radius.Full,
    marginBottom: designTokens.OptionTokens.Spacing.spacing_16px,
  },
  browseButtonText: {
    fontSize: designTokens.OptionTokens.Typography.Size.text_size_16,
    fontWeight: '500',
  },
  description: {
    fontSize: designTokens.OptionTokens.Typography.Size.text_size_14,
    textAlign: 'center',
    lineHeight: designTokens.OptionTokens.Typography.Line_Height.line_height_20,
  },
});