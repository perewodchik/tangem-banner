import { useTheme } from "@/shared/theme";
import { Typography } from "@/shared/ui";
import { ReactNode } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  padding: 10px 14px;
  border-radius: 100px;
  backdrop-filter: blur(12px);
  background: ${({ theme }) => theme.common.white};
`;

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const RoundButton = ({ children, onClick }: Props) => {
  const theme = useTheme();

  return (
    <ButtonWrapper onClick={onClick} role="button">
      <Typography variant="body-medium" color={theme?.common.black}>
        {children}
      </Typography>
    </ButtonWrapper>
  );
};
