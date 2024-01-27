import styled from "styled-components";

import { Typography } from "@/shared/ui";
import { ContactBlock } from "@/entities/footer/ui/molecules";
import { LINKS } from "./constants";

import "./styles.css";

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.common.black};
  padding: 24px;
  display: flex;
  gap: 16px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  @media (width < ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <ContactBlock links={LINKS} />
      <Typography variant="body-bold">Made with 🧡 by Perewodchik</Typography>
    </FooterWrapper>
  );
};
