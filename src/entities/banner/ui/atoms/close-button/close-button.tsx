import { CloseIcon } from "@/shared/icons";
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

export const CloseButton = ({ onClick }: Props) => {
  return (
    <ButtonWrapper onClick={onClick} role="button">
      <CloseIcon />
    </ButtonWrapper>
  );
};
