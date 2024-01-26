import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";

export const $isPromoBannerVisible = createStore(true);

export const dismissPromoBanner = createEvent();

$isPromoBannerVisible.on(dismissPromoBanner, () => false);

export const $isTopBannerInViewport = createStore(true);

export const setIsTopBannerInViewport = createEvent<boolean>();

$isTopBannerInViewport.on(setIsTopBannerInViewport, (_, payload) => payload);

persist({
  key: "promo-banner",
  store: $isPromoBannerVisible,
});
