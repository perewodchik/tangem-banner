import styled from "styled-components";

type Props = {
  flex?: number;
};

export const Flex = styled.div<Props>`
  flex: ${({ flex }) => flex ?? 1};
`;
