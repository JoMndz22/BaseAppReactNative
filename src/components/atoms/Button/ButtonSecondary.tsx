import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ButtonSecondaryProps } from './Button.types';
import { Colors } from '../../../assets';

export function ButtonSecondary({
  title,
  onPress,
  isDisabled,
  buttonStyle = {},
  titleStyle = {},
}: ButtonSecondaryProps) {
  return (
    <TouchableOpacity onPress={onPress} disabled={isDisabled} activeOpacity={0.8}>
      <View style={[styles.container, buttonStyle, isDisabled && styles.disableStyle]}>
        <Text numberOfLines={1} style={[styles.text, titleStyle]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white[0],
    borderColor: Colors.border[0],
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 12,
    // flex: 1,
    width: undefined,
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
    color: Colors.blueSolid1[0],
  },
});
