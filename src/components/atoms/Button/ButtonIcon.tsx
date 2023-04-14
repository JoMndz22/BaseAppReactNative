import { StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonIconProps } from './Button.types';
import { Svg } from '../Svg';

export default function ButtonPrimary({
  onPress,
  iconName,
  isDisabled,
  iconColor,
  iconWidth = 24,
  iconHeight = 24,
  buttonStyle = {},
}: ButtonIconProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      style={[styles.container, buttonStyle, isDisabled && styles.disableStyle]}
    >
      <Svg width={iconWidth} height={iconHeight} color={iconColor} name={iconName} />
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
    width: 56,
    height: 50,
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
