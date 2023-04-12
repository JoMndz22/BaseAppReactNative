import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

//style?: StyleProp<ViewStyle> | undefined;

interface RowProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}

const Row = ({ children, style }: RowProps): JSX.Element => {
  return <View style={[styles.row, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    columnGap: 15,
  },
});

export default Row;
