import { FloatingBanner } from "@/entities/banner";
import { $isPromoBannerVisible, dismissPromoBanner } from "@/features/banner";
import { $isTopBannerInViewport } from "@/features/banner/model";
import { useUnit } from "effector-react";

export const FloatingBannerConnector = () => {
  //TODO: Fetch data
  const { discount, promocode, promotionName, link } = {
    discount: 10,
    link: "/blackfriday",
    promocode: "10FRIDAY",
    promotionName: "Black Friday",
  };
  const isBannerVisible = useUnit($isPromoBannerVisible);
  const isTopBannerInViewport = useUnit($isTopBannerInViewport);

  if (!isBannerVisible) {
    return null;
  }

  return (
    <FloatingBanner
      isFloatingBannerVisible={!isTopBannerInViewport}
      link={link}
      promotionName={promotionName}
      promocode={promocode}
      discount={discount}
      onClose={dismissPromoBanner}
    />
  );
};
