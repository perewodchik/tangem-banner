import styled from "styled-components";

export const ImageWrapper = styled.div<{ src: string }>`
  height: 54px;
  max-width: 160px;
  flex: 1;
  width: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

type Props = {
  src: string;
};

export const BannerImage = ({ src }: Props) => {
  return <ImageWrapper role="img" src={src}></ImageWrapper>;
};
