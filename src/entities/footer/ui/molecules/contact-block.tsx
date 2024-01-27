import { Typography } from "@/shared/ui";
import styled from "styled-components";
import { FooterLink } from "../atoms";

const BlockWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

type Props = {
  links: {
    link: string;
    label: string;
  }[];
};

export const ContactBlock = ({ links }: Props) => {
  return (
    <BlockWrapper>
      <Typography mb={8} variant="body-bold">
        Contact me
      </Typography>
      <LinksWrapper>
        {links.map((link) => (
          <FooterLink {...link} key={link.link} />
        ))}
      </LinksWrapper>
    </BlockWrapper>
  );
};
