import styled from "styled-components";

import { CloseButton, LinkButton } from "@/shared/ui/atoms";
import {
  DiscountPercentage,
  PromocodeText,
  PromotionEventName,
} from "../../atoms";
import { useRef } from "react";
import { Transition } from "react-transition-group";

import "./floating-banner.css";
import {
  transitionDuration,
  defaultStyle,
  transitionStyles,
} from "./floating-banner-animation";

const BANNER_WIDTH = 600;
const BANNER_MARGIN_RIGHT = 16;
const BANNER_MARGIN_BOTTOM = 16;

const BannerWrapper = styled.div`
  width: ${BANNER_WIDTH}px;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 16px;
  padding: 36px;
  box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.45);

  position: fixed;
  bottom: ${BANNER_MARGIN_BOTTOM}px;
  right: ${BANNER_MARGIN_RIGHT}px;

  background:
    url("/images/floating-banner.png") no-repeat,
    ${({ theme }) => theme.colors.common.black} no-repeat;
  background-size: cover;
  background-position-x: 75%;

  @media (width < ${BANNER_WIDTH + BANNER_MARGIN_RIGHT}px) {
    width: 100vw;
    right: 0px;
    bottom: 0px;
    border-radius: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${BANNER_WIDTH / 2}px;
`;

const CloseButtonAbsolute = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

type Props = {
  isFloatingBannerVisible: boolean;
  promotionName: string;
  discount: number;
  promocode: string;
  link: string;
  onClose: () => void;
};

export const FloatingBanner = ({
  isFloatingBannerVisible,
  promotionName,
  discount,
  promocode,
  link,
  onClose,
}: Props) => {
  const bannerRef = useRef(null);

  return (
    <Transition
      nodeRef={bannerRef}
      in={isFloatingBannerVisible}
      timeout={transitionDuration}
      unmountOnExit
    >
      {(state) => (
        <BannerWrapper
          id="floating_banner"
          role="banner"
          ref={bannerRef}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          <CloseButtonAbsolute>
            <CloseButton onClick={onClose} />
          </CloseButtonAbsolute>
          <Content className="floating-banner__content">
            <PromotionEventName mt={24}>{promotionName}</PromotionEventName>
            <DiscountPercentage mt={24} discount={discount} />
            <PromocodeText promocode={promocode} mt={16} />
            <LinkButton link={link} mt={40}>
              Shop now through Monday
            </LinkButton>
          </Content>
        </BannerWrapper>
      )}
    </Transition>
  );
};
