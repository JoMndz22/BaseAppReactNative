import { Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Nz } from '../../../functions';
import { Colors } from '../../../assets/css';

interface Pprops {
  children: React.ReactNode;
  color?: string;
  style?: StyleProp<ViewStyle> | undefined;
  align?: string;
  fsize?: number;
  type?: string;
}
// const {txtColor, fSize, aling, typeFont, txtUpper} = props;
const P = ({
  children,
  align = 'left',
  color = Colors.black[0],
  fsize = Nz(14),
  style = {},
}: Pprops): JSX.Element => (
  <Text style={[styles({ align, color, fsize }).txtAlign, style]}>{children}</Text>
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
