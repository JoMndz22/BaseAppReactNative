import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { BtnProps } from '../interfaces/formInterfaces';

const Button = ({ title, children, color, background, onPress }: BtnProps): JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.btn, { backgroundColor: background }]}>
        {title && <Text style={{ color }}>{title}</Text>}
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
  },
});

export default Button;
