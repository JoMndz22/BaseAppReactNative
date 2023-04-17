import { StyleProp, ViewStyle } from 'react-native/types';

export interface Pprops {
  children: React.ReactNode;
  color?: string;
  style?: StyleProp<ViewStyle> | undefined;
  align?: string;
  fontSize?: number;
  type?: string;
}
