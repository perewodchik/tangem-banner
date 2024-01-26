import { SpacingProps, applySpacing } from "@/shared/theme/spacing";
import { Typography } from "@/shared/ui";
import { ReactNode } from "react";
import styled from "styled-components";

const LinkWrapper = styled.a<SpacingProps>`
  ${applySpacing};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.background.grey};
  padding: 12px 24px;
  border-radius: 14px;
  &:hover {
    opacity: 0.7;
  }
`;

type Props = {
  link: string;
  children: ReactNode;
} & SpacingProps;

export const LinkButton = ({ link, children, ...rest }: Props) => {
  return (
    <LinkWrapper href={link} {...rest}>
      <Typography variant="body-medium">{children}</Typography>
    </LinkWrapper>
  );
};
