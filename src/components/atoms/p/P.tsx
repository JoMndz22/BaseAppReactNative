import { Text, StyleProp, ViewStyle } from 'react-native'

interface Pprops{
    children: React.ReactNode,
    color?: string,
    style?: StyleProp<ViewStyle> | undefined;
}

const P = ({children,style}:Pprops) :JSX.Element => {
  return (
      <Text style={style}>{children}</Text>
  )
}

export default P