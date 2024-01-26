import styled, { keyframes } from "styled-components";

import { useDeviceSize } from "@/shared/theme";
import { CloseButton } from "@/shared/ui/atoms";

import { BannerImage, MobileNavigation, RoundButton } from "../../atoms";
import { BannerInfo, BannerMobileContent } from "../../molecules";
import { TOP_BANNER_ID } from "../../../config";
import { useRef } from "react";

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.common.black};
  @media (width < ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-left: 0px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

type Props = {
  link: string;
  duration: string;
  discount: number;
  promocode: string;
  promotionName: string;
  isBannerVisible: boolean;
  onCloseBanner: () => void;
};

export const TopBanner = ({
  duration,
  discount,
  promocode,
  promotionName,
  link,
  isBannerVisible,
  onCloseBanner,
}: Props) => {
  const deviceSize = useDeviceSize();
  const bannerRef = useRef(null);

  if (!isBannerVisible) {
    return null;
  }

  return (
    <BannerWrapper ref={bannerRef} role="banner" id={TOP_BANNER_ID}>
      <BannerImage src="/images/top-banner.png" />
      {deviceSize === "sm" ? (
        <>
          <BannerMobileContent discount={discount} />
          <MobileNavigation onClick={onCloseBanner} />
        </>
      ) : (
        <>
          <BannerInfo
            promotionName={promotionName}
            discount={discount}
            duration={duration}
            promocode={promocode}
          />
          <Row>
            <RoundButton link={link}>Shop now</RoundButton>
            {deviceSize === "lg" ? (
              <CloseButton onClick={onCloseBanner} />
            ) : null}
          </Row>
        </>
      )}
    </BannerWrapper>
  );
};
