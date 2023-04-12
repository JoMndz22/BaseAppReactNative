import { Text, StyleSheet } from 'react-native';

interface Pprops {
  children: React.ReactNode;
  color?: string;
  //style?: StyleProp<ViewStyle> | undefined,
  align?: string;
  fsize?: number;
}
// const {txtColor, fSize, aling, typeFont, txtUpper} = props;
const P = ({ children, align = 'left', color = '#000', fsize = 14 }: Pprops): JSX.Element => (
  <Text style={[styles({ align, color, fsize }).txtAlign]}>{children}</Text>
);

const styles = ({ align, color, fsize }: any) =>
  StyleSheet.create({
    txtAlign: {
      textAlign: align,
      color,
      fontSize: fsize,
      fontFamily: 'Poppins-Regular',
    },
  });

export default P;
