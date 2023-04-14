import type { SvgFiles } from './SvgFiles';

export type SvgName = keyof typeof SvgFiles;

export interface SvgProps {
  width: number;
  height: number;
  name: SvgName;
  color?: string;
}
