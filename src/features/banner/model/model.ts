import { createEvent, createStore } from "effector";

export const $isPromoBannerVisible = createStore(true);

export const dismissPromoBanner = createEvent();

$isPromoBannerVisible.on(dismissPromoBanner, () => false);

export const $isTopBannerInViewport = createStore(true);

export const setIsTopBannerInViewport = createEvent<boolean>();

$isTopBannerInViewport.on(setIsTopBannerInViewport, (_, payload) => payload);
