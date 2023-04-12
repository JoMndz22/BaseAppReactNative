import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonPrimaryProps } from './Button.type';

export default function ButtonPrimary({
  title = 'Button primary',
  onPress,
  isDisabled,
  buttonStyle = {},
  titleStyle = {},
}: ButtonPrimaryProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      style={[styles.container, buttonStyle, isDisabled && styles.disableStyle]}
    >
      <Text numberOfLines={1} style={[styles.text, titleStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F206C',
    justifyContent: 'center',
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 12,
  },
  disableStyle: {
    opacity: 0.5,
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: 'white',
  },
});