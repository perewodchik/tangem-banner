import { ReactNode } from "react";
import styled from "styled-components";

import { Flex } from "@/shared/ui/atoms";

import { Footer } from "../footer";
import { Navbar } from "../navbar";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 200vh;
`;

const MainSection = styled.main`
  width: 100%;
`;

type Props = {
  children: ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Navbar />
      <MainSection>{children}</MainSection>
      <Flex />
      <Footer />
    </Layout>
  );
};
