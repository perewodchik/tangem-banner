import { createEvent, createStore } from "effector";

export const $isPromoBannerVisible = createStore(true);

export const dismissPromoBanner = createEvent();

$isPromoBannerVisible.on(dismissPromoBanner, () => false);
