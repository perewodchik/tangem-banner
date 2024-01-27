import { MenuIcon } from "@/shared/icons";
import styled from "styled-components";

const ButtonWrapper = styled.a`
  text-decoration: none;
  border-radius: 50%;
  &:hover {
    opacity: 0.7;
  }
  cursor: pointer;
`;

type Props = {
  link: string;
};

export const MobileNavigation = ({ link }: Props) => {
  return (
    <ButtonWrapper href={link} role="link">
      <MenuIcon />
    </ButtonWrapper>
  );
};
