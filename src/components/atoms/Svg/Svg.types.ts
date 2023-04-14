import type { SvgFiles } from './SvgFiles';

export type SvgName = keyof typeof SvgFiles;

export interface SvgProps {
  width: number;
  height: number;
  color: string;
  name: SvgName;
}
