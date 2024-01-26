import { useTheme } from "@/shared/theme";
import { Typography } from "@/shared/ui";
import { ReactNode } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.a`
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 100px;
  backdrop-filter: blur(12px);
  background: ${({ theme }) => theme.colors.common.white};
  &:hover {
    opacity: 0.7;
  }
`;

type Props = {
  link: string;
  children: ReactNode;
};

export const RoundButton = ({ children, link }: Props) => {
  const theme = useTheme();

  return (
    <ButtonWrapper href={link} role="link">
      <Typography variant="body-medium" color={theme.colors.common.black}>
        {children}
      </Typography>
    </ButtonWrapper>
  );
};
