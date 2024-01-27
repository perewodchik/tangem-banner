import { Typography } from "@/shared/ui";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  &:hover {
    span {
      color: ${({ theme }) => theme.colors.brand.gold} !important;
    }
  }
`;

type Props = {
  link: string;
  label: string;
};

export const FooterLink = ({ link, label }: Props) => {
  return (
    <Link href={link}>
      <Typography variant="body-regular">{label}</Typography>
    </Link>
  );
};
