import { Interpolation } from "styled-components";

type Direction = {
  side: "t" | "b" | "l" | "r";
  axis: "x" | "y";
};

const DIRECTIONS: Direction[] = [
  { side: "t", axis: "y" },
  { side: "r", axis: "x" },
  { side: "b", axis: "y" },
  { side: "l", axis: "x" },
];

const getSpacingValue = (type: "m" | "p", values: SpacingProps) => {
  const initialValues = [0, 0, 0, 0];
  const spacingValues = initialValues.map((initialValue, index) => {
    const direction = DIRECTIONS[index];
    const prefixSide = (type + direction.side) as keyof SpacingProps;
    const prefixAxis = (type + direction.axis) as keyof SpacingProps;
    const value =
      values[prefixSide] ?? values[prefixAxis] ?? values[type] ?? initialValue;
    return `${value}px`;
  });
  if (spacingValues.every((item) => item === "0px")) {
    return null;
  }
  return `${spacingValues.join(" ")};\n`;
};

export const applySpacing: Interpolation<SpacingProps> = (props) => {
  const padding = getSpacingValue("p", props);
  const margin = getSpacingValue("m", props);
  return `${padding ? `padding: ${padding}` : ""}${
    margin ? `margin: ${margin}` : ""
  }`;
};

export type SpacingProps = {
  m?: number;
  mx?: number;
  my?: number;
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  p?: number;
  px?: number;
  py?: number;
  pb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
};
