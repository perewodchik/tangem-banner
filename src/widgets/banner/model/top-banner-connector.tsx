import { useUnit } from "effector-react";

import { TopBanner } from "@/entities/banner";
import { $isPromoBannerVisible, dismissPromoBanner } from "@/features/banner";
import { useEffect } from "react";
import { TOP_BANNER_ID } from "@/entities/banner/top-banner";
import { setIsTopBannerInViewport } from "@/features/banner/model";

export const TopBannerConnector = () => {
  //TODO: Fetch data
  const { discount, duration, promocode } = {
    discount: "10",
    duration: "24-27 Nov",
    promocode: "10FRIDAY",
  };
  const isBannerVisible = useUnit($isPromoBannerVisible);

  useEffect(() => {
    const target = document.querySelector(`#${TOP_BANNER_ID}`);

    if (!target) {
      return;
    }

    const observerCallback = (e: IntersectionObserverEntry[]) => {
      const observerEntry = e[0];

      if (!observerEntry) {
        return;
      }

      //@ts-ignore
      const isTopBannerInViewport = observerEntry.isVisible;
      setIsTopBannerInViewport(isTopBannerInViewport);
    };

    const options = {
      trackVisibility: true,
      delay: 100,
    } as IntersectionObserverInit;

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

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
