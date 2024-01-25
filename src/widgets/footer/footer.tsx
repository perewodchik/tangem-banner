import styled from "styled-components";

import { Typography } from "@/shared/ui";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.common.black};
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Typography variant="heading">Footer</Typography>
    </FooterWrapper>
  );
};
