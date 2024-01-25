import styled from "styled-components";
import {
  TypographyVariantName,
  typographyVariants,
} from "./typography-variants";
import { SpacingProps, applySpacing } from "@/shared/theme/spacing";

type Props = {
  variant: TypographyVariantName;
  textAlign?: "left" | "center" | "right";
  color?: string;
} & SpacingProps;

export const Typography = styled.span<Props>`
  ${applySpacing}
  font-family: ${({ variant }) => typographyVariants[variant]["font-family"]};
  font-size: ${({ variant }) => typographyVariants[variant]["font-size"]};
  font-style: ${({ variant }) => typographyVariants[variant]["font-style"]};
  font-weight: ${({ variant }) => typographyVariants[variant]["font-weight"]};
  line-height: ${({ variant }) => typographyVariants[variant]["line-height"]};
  letter-spacing: ${({ variant }) =>
    typographyVariants[variant]["letter-spacing"]};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color, theme }) => color ?? theme.colors.text.primary};
`;
