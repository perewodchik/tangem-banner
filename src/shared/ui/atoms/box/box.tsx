import { SpacingProps, applySpacing } from "@/shared/theme/spacing";
import { ReactNode } from "react";
import styled from "styled-components";

export const BoxWrapper = styled.div<SpacingProps>`
  ${applySpacing};
`;

type Props = {
  children: ReactNode;
} & SpacingProps;

export const Box = ({ children, ...rest }: Props) => {
  return <BoxWrapper {...rest}>{children}</BoxWrapper>;
};
