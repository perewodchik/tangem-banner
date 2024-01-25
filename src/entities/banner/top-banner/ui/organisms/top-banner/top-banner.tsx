import styled from "styled-components";

import { useDeviceSize } from "@/shared/theme";
import { CloseButton } from "@/shared/ui/atoms";

import { BannerImage, MobileNavigation, RoundButton } from "../../atoms";
import { BannerInfo, BannerMobileContent } from "../../molecules";

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
  const deviceSize = useDeviceSize();

  return (
    <BannerWrapper role="banner">
      <BannerImage src="/images/top-banner.png" />
      {deviceSize === "sm" ? (
        <>
          <BannerMobileContent discount={discount} />
          <MobileNavigation onClick={onCloseBanner} />
        </>
      ) : (
        <>
          <BannerInfo
            discount={discount}
            duration={duration}
            promocode={promocode}
          />
          <Row>
            <RoundButton onClick={onCloseBanner}>Shop now</RoundButton>
            {deviceSize === "lg" ? (
              <CloseButton onClick={onCloseBanner} />
            ) : null}
          </Row>
        </>
      )}
    </BannerWrapper>
  );
};
