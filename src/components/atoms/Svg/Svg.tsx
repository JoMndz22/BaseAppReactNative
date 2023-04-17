import { SvgXml } from 'react-native-svg';
import { SvgProps } from './Svg.types';
import { SvgFiles } from './SvgFiles';
import { Colors } from '../../../assets';

const addCurrentColorToSvg = (xml: string) => {
  // stroke: value to change the icon color
  const paramNameToChange = 'stroke="';

  // currentColor: value to indicate to react-native-svg that need to use the color value
  const valueToChange = 'currentColor';

  const startParamIndex = xml.indexOf(paramNameToChange) + 8;
  const cleanValue = xml.substring(startParamIndex);
  const endParamIndex = cleanValue.indexOf('"');

  return `${xml.substring(0, startParamIndex)}${valueToChange}${cleanValue.substring(
    endParamIndex,
  )}`;
};

export default function Svg({ name, color = Colors.white[0], width = 24, height = 24 }: SvgProps) {
  return (
    <SvgXml
      xml={addCurrentColorToSvg(SvgFiles[name][0])}
      width={width}
      height={height}
      color={color}
    />
  );
}
