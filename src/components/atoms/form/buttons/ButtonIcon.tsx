import { StyleSheet, Text, View } from 'react-native';
import { BtnProps } from '../interfaces/formInterfaces';
import Button from './Button';

const ButtonIcon = ({ title, children, color, background, onPress }: BtnProps): JSX.Element => (
  <Button onPress={onPress} background={background} color={color}>
    <View style={styles.btnIconLeft}>
      {title && <Text style={{ color }}>{title}</Text>}
      {children}
    </View>
  </Button>
);

const styles = StyleSheet.create({
  btnIconLeft: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
});

export default ButtonIcon;
