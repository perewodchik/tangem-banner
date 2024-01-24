import styled from "styled-components";

export const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;

type Props = {
  src: string;
};

export const BannerImage = ({ src }: Props) => {
  return <Image alt="gift and tropy" src={src} />;
};
