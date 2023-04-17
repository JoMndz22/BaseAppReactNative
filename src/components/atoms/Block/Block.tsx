import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Nz } from '../../../functions';

interface PropsBlock {
  children: React.ReactNode | React.ReactNode[];
  style?: StyleProp<ViewStyle> | undefined;
}

const Block = ({ children, style = {} }: PropsBlock) => (
  <View style={[styles.styleBlock, style]}>{children}</View>
);

const styles = StyleSheet.create({
  styleBlock: {
    marginBottom: Nz(8),
  },
});

export default Block;
