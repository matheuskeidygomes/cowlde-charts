import { CurveType } from "recharts/types/shape/Curve";

export type ChartElement = {
  width?: string | number;
  height?: string | number;
  dashGrid?: string;
  onClick?: (details: any) => void;
  dataSource: DataSourceElement;
};

export type DataSourceElement = {
  data: DataElement[];
  [key: string]:
    | LineElement[]
    | BarElement[]
    | PieElement[]
    | ComposedBarElement[]
    | AreaElement[]
    | DataElement[];
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
  fill?: string;
};

export type PieElement = {
  title: string;
  color?: string;
  fill?: string;
};

export type ComposedBarElement = {
  title: string;
  color?: string;
  fill?: string;
};

export type AreaElement = {
  title: string;
  color?: string;
  fill?: string;
};

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
