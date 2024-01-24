import styled from "styled-components";
import {
  BannerDiscount,
  BannerDurationText,
  BannerImage,
  BannerPromocode,
  CloseButton,
  RoundButton,
} from "../../atoms";
import { BannerInfo } from "../../molecules";

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.common.black};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

type Props = {
  duration: string;
  discount: string;
  promocode: string;
  onCloseBanner: () => void;
};

export const TopBanner = ({
  duration,
  discount,
  promocode,
  onCloseBanner,
}: Props) => {
  return (
    <BannerWrapper role="banner">
      <BannerImage src="/images/top-banner.png" />
      <BannerInfo
        discount={discount}
        duration={duration}
        promocode={promocode}
      />
      <Row>
        <RoundButton onClick={onCloseBanner}>Shop now</RoundButton>
        <CloseButton onClick={onCloseBanner} />
      </Row>
    </BannerWrapper>
  );
};
