import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonPrimaryIconProps } from './Button.types';
import { Svg } from '../Svg';

export function ButtonPrimaryIcon({
  title = 'Button primary',
  onPress,
  iconName,
  isDisabled,
  iconWidth = 24,
  iconHeight = 24,
  iconColor = 'white',
  buttonStyle = {},
  titleStyle = {},
}: ButtonPrimaryIconProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      style={[styles.container, buttonStyle, isDisabled && styles.disableStyle]}
    >
      <Svg name={iconName} width={iconWidth} height={iconHeight} color={iconColor} />
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
    height: 50,
    flexDirection: 'row',
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
    marginLeft: 29,
  },
});
