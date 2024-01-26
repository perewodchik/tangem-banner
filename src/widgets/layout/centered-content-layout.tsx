import { ReactNode } from "react";
import styled from "styled-components";

const Layout = styled.main<{ backgroundColor?: string }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "white"};
`;

type Props = {
  backgroundColor?: string;
  children: ReactNode;
};

export const CenteredContentLayout = ({ backgroundColor, children }: Props) => {
  return <Layout backgroundColor={backgroundColor}>{children}</Layout>;
};
