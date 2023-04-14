import { Text, StyleSheet } from 'react-native';
import { Nz } from '../../../functions';
import { Colors } from '../../../assets/';
import { Pprops } from './P.types';
import Fonts from '../../../assets/fonts/Fonts';

const P = ({
  children,
  align = 'left',
  color = Colors.black[0],
  fsize = Nz(14),
  style = {},
  type,
}: Pprops): JSX.Element => {
  let fontFamily = Fonts.medium;
  switch (type) {
    case 'black':
      fontFamily = Fonts.black;
      break;
    case 'bold':
      fontFamily = Fonts.bold;
      break;
    case 'extraBold':
      fontFamily = Fonts.extraBold;
      break;
    case 'extraLight':
      fontFamily = Fonts.extraLight;
      break;
    case 'italic':
      fontFamily = Fonts.italic;
      break;
    case 'light':
      fontFamily = Fonts.light;
      break;
    case 'medium':
      fontFamily = Fonts.medium;
      break;
    case 'semibold':
      fontFamily = Fonts.semibold;
      break;
    case 'thin':
      fontFamily = Fonts.thin;
      break;
    default:
      fontFamily = Fonts.medium;
      break;
  }

  return (
    <Text style={[styles({ align, color, fsize, fontFamily }).txtAlign, style]}>{children}</Text>
  );
};

export const styles = ({ align, color, fsize, fontFamily }: any) =>
  StyleSheet.create({
    txtAlign: {
      textAlign: align,
      color,
      fontSize: fsize,
      fontFamily: fontFamily,
    },
  });

export default P;
