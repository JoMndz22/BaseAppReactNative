import { StyleSheet, View } from 'react-native';
import { Nz } from '../../../functions';

interface PwithBackProps {
  background: string;
  children: React.ReactNode | React.ReactNode[];
}

const PBackground = ({ children, background = 'white' }: PwithBackProps): JSX.Element => (
  <View style={[styles({ background }).backstyle]}>{children}</View>
);

const styles = ({ background }: any) =>
  StyleSheet.create({
    backstyle: {
      backgroundColor: background,
      borderRadius: Nz(5),
      paddingVertical: Nz(5),
      paddingHorizontal: Nz(8),
    },
  });

export default PBackground;
