import styled from "styled-components";
import {
  BannerDiscount,
  BannerDurationText,
  BannerPromocode,
  ItemSeparator,
} from "../../atoms";

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

type Props = {
  duration: string;
  discount: string;
  promocode: string;
};

export const BannerInfo = ({ discount, duration, promocode }: Props) => {
  return (
    <Wrapper>
      <BannerDurationText duration={duration} />
      <ItemSeparator />
      <BannerDiscount discount={discount} />
      <ItemSeparator />
      <BannerPromocode promocode={promocode} />
    </Wrapper>
  );
};
