import { MenuIcon } from "@/shared/icons";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  border-radius: 50%;
  &:hover {
    opacity: 0.7;
  }
  cursor: pointer;
`;

type Props = {
  onClick: () => void;
};

export const MobileNavigation = ({ onClick }: Props) => {
  return (
    <ButtonWrapper onClick={onClick} role="link">
      <MenuIcon />
    </ButtonWrapper>
  );
};
