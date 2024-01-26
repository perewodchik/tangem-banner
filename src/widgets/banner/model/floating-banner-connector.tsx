import { FloatingBanner } from "@/entities/banner";
import { $isPromoBannerVisible, dismissPromoBanner } from "@/features/banner";
import { useGetBannerInfo } from "@/features/banner/api";
import { $isTopBannerInViewport } from "@/features/banner/model";
import { useUnit } from "effector-react";

export const FloatingBannerConnector = () => {
  const { data: getBannerInfoData } = useGetBannerInfo();

  const isBannerVisible = useUnit($isPromoBannerVisible);
  const isTopBannerInViewport = useUnit($isTopBannerInViewport);

  console.log(isTopBannerInViewport);

  if (!isBannerVisible || !getBannerInfoData) {
    return null;
  }

  const { link, promocode, promocodeDiscount, promotionName } =
    getBannerInfoData;

  return (
    <FloatingBanner
      isFloatingBannerVisible={!isTopBannerInViewport}
      link={link}
      promotionName={promotionName}
      promocode={promocode}
      discount={promocodeDiscount}
      onClose={dismissPromoBanner}
    />
  );
};
