import { FloatingBanner } from "@/entities/banner";
import { $isPromoBannerVisible, dismissPromoBanner } from "@/features/banner";
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

  if (!isBannerVisible) {
    return null;
  }

  return (
    <FloatingBanner
      link={link}
      promotionName={promotionName}
      promocode={promocode}
      discount={discount}
      onClose={dismissPromoBanner}
    />
  );
};
