import styled from "styled-components";

import { CloseButton, Flex } from "@/shared/ui/atoms";
import {
  DiscountPercentage,
  LinkButton,
  PromocodeText,
  PromotionEventName,
} from "../../atoms";
import { useDeviceSize } from "@/shared/theme";
import { useRef } from "react";
import { Transition } from "react-transition-group";

const BannerWrapper = styled.div`
  background:
    url("/images/floating-banner.png"),
    lightgray -2px -28.228px / 101.333% 114.457% no-repeat;
  width: 600px;
  height: 350px;
  display: flex;
  border-radius: 16px;
  padding: 36px;
  box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.45);
  position: fixed;
  bottom: 0;
  right: 0;
  transition: all 0.5s ease-in-out;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const CloseButtonAbsolute = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const transitionDuration = 500;

const defaultStyle = {
  transition: `opacity ${transitionDuration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

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
  const deviceSize = useDeviceSize();
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
          role="banner"
          ref={bannerRef}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          <CloseButtonAbsolute>
            <CloseButton onClick={onClose} />
          </CloseButtonAbsolute>
          {deviceSize !== "sm" ? <Flex /> : null}
          <Content>
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
