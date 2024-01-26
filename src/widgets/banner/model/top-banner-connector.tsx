import { useUnit } from "effector-react";

import { TopBanner } from "@/entities/banner";
import { $isPromoBannerVisible, dismissPromoBanner } from "@/features/banner";
import { useEffect } from "react";
import { TOP_BANNER_ID } from "@/entities/banner/top-banner";
import { setIsTopBannerInViewport } from "@/features/banner/model";
import { useGetBannerInfo } from "@/features/banner/api";

export const TopBannerConnector = () => {
  //TODO: Fetch data
  const { data: useGetBannerInfoData, isLoading } = useGetBannerInfo();
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
  }, [useGetBannerInfoData]);

  const duration = useGetBannerInfoData?.duration ?? "";
  const link = useGetBannerInfoData?.link ?? "";
  const promocode = useGetBannerInfoData?.promocode ?? "";
  const promocodeDiscount = useGetBannerInfoData?.promocodeDiscount ?? 0;
  const promotionName = useGetBannerInfoData?.promotionName ?? "";

  return (
    <TopBanner
      isBannerVisible={isBannerVisible && !isLoading}
      link={link}
      promotionName={promotionName}
      discount={promocodeDiscount}
      duration={duration}
      promocode={promocode}
      onCloseBanner={dismissPromoBanner}
    />
  );
};
