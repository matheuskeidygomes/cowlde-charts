import { CurveType } from "recharts/types/shape/Curve";

export type DefaultValues = {
  type: CurveType;
  width: string | number;
  height: number | string;
  color: string;
  lineStroke: string;
  gridStroke: string;
  filterColor: string;
  stackId: string;
  brushFilter: string;
  brushHeight: number;
  opacity: number;
  barSize: number;
  outerRadius: number;
  innerRadius: number;
};

export type ChartElement = {
  dataSource: DataSourceElement;
  width?: string | number;
  height?: string | number;
  dashGrid?: string;
  barSize?: number;
  leftAxisColor?: string;
  rightAxisColor?: string;
  brushFilter?: string;
  brushColor?: string;
  brushHeight?: number;
  outerRadius?: number;
  innerRadius?: number;
  onClick?: (details: any) => void;
};

export type DataSourceElement = {
  data: DataElement[];
  [key: string]:
    | LineElement[]
    | BarElement[]
    | PieElement[]
    | ComposedBarElement[]
    | AreaElement[];
};

export type DataElement = {
  title: string;
  [key: string]: string | number;
};

export type LineElement = {
  title: string;
  type?: CurveType;
  color?: string;
  dashed?: {
    active?: boolean;
    stroke?: string;
  };
};

export type BarElement = {
  title: string;
  color?: string;
  axisId?: string;
  stackId?: string;
};

export type PieElement = {
  color?: string;
};

export type ComposedBarElement = {
  title: string;
  color?: string;
  type?: CurveType;
  opacity?: number;
};

export type AreaElement = {
  title: string;
  color?: string;
  type?: CurveType;
  opacity?: number;
  stackId?: string;
};
