import { Svg, Path } from 'react-native-svg';

export default function Printer({ color = '#FFF' }: { color?: string }) {
  return (
    <Svg width='25' height='24' viewBox='0 0 25 24' fill='none' color={color}>
      <Path
        d='M6.5 17H1.5V8C1.5 6.89543 2.39543 6 3.5 6H21.5C22.6046 6 23.5 6.89543 23.5 8V17H18.5M6.5 14H18.5V23H6.5V14ZM6.5 1H18.5V6H6.5V1Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  );
}
