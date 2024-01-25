import styled from "styled-components";

import { CloseButton, Flex } from "@/shared/ui/atoms";
import {
  DiscountPercentage,
  LinkButton,
  PromocodeText,
  PromotionEventName,
} from "../../atoms";
import { useDeviceSize } from "@/shared/theme";

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
  position: relative;
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

type Props = {
  promotionName: string;
  discount: number;
  promocode: string;
  link: string;
  onClose: () => void;
};

export const FloatingBanner = ({
  promotionName,
  discount,
  promocode,
  link,
  onClose,
}: Props) => {
  const deviceSize = useDeviceSize();

  return (
    <BannerWrapper role="banner">
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
  );
};
