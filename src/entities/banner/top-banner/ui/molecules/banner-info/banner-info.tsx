import styled from "styled-components";
import {
  BannerDiscount,
  BannerDurationText,
  BannerPromocode,
  ItemSeparator,
} from "../../atoms";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

type Props = {
  promotionName: string;
  duration: string;
  discount: number;
  promocode: string;
};

export const BannerInfo = ({
  promotionName,
  discount,
  duration,
  promocode,
}: Props) => {
  return (
    <Wrapper>
      <BannerDurationText promotionName={promotionName} duration={duration} />
      <ItemSeparator />
      <BannerDiscount discount={discount} />
      <ItemSeparator />
      <BannerPromocode promocode={promocode} />
    </Wrapper>
  );
};
