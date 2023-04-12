import { SvgXml } from 'react-native-svg';
// import Printer from '../../../assets/images/svg/printer.svg';

type IconTypes = 'printer' | 'close';

interface SvgIconProps {
  name: IconTypes;
  color?: string;
}

export default function SvgIcon({ color = '#FFF', name }: SvgIconProps) {
  const xml = `
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 17H1.5V8C1.5 6.89543 2.39543 6 3.5 6H21.5C22.6046 6 23.5 6.89543 23.5 8V17H18.5M6.5 14H18.5V23H6.5V14ZM6.5 1H18.5V6H6.5V1Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;
  if (name === 'printer') return <SvgXml xml={xml} width='25' height='25' color={'red'} />;
  else return null;
}
