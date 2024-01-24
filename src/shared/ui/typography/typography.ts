import styled from "styled-components";
import {
  TypographyVariantName,
  typographyVariants,
} from "./typography-variants";

type Props = {
  variant: TypographyVariantName;
  textAlign?: "left" | "center" | "right";
  color?: string;
};

export const Typography = styled.span<Props>`
  font-family: ${({ variant }) => typographyVariants[variant]["font-family"]};
  font-size: ${({ variant }) => typographyVariants[variant]["font-size"]};
  font-style: ${({ variant }) => typographyVariants[variant]["font-style"]};
  font-weight: ${({ variant }) => typographyVariants[variant]["font-weight"]};
  line-height: ${({ variant }) => typographyVariants[variant]["line-height"]};
  letter-spacing: ${({ variant }) =>
    typographyVariants[variant]["letter-spacing"]};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color, theme }) => color ?? theme.text.primary};
`;
