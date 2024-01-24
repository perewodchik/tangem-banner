import { useUnit } from "effector-react";

import { TopBanner } from "@/entities/banner";
import { $isPromoBannerVisible, dismissPromoBanner } from "@/features/banner";

export const TopBannerConnector = () => {
  //TODO: Fetch data
  const { discount, duration, promocode } = {
    discount: "10",
    duration: "24-27 Nov",
    promocode: "10FRIDAY",
  };
  const isBannerVisible = useUnit($isPromoBannerVisible);

  if (!isBannerVisible) {
    return null;
  }

  return (
    <TopBanner
      discount={discount}
      duration={duration}
      promocode={promocode}
      onCloseBanner={dismissPromoBanner}
    />
  );
};
