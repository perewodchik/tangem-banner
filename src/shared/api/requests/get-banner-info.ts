export type GetBannerInfoResponse = {
  promotionName: string;
  duration: string;
  link: string;
  promocode: string;
  promocodeDiscount: number;
};

const REQUEST_DELAY = 1000;

export const getBannerInfo = async () => {
  return await new Promise<GetBannerInfoResponse>((resolve) => {
    setTimeout(
      () =>
        resolve({
          duration: "24-27 nov",
          link: "/blackfriday",
          promocode: "10FRIDAY",
          promocodeDiscount: 10,
          promotionName: "Black friday",
        }),
      REQUEST_DELAY
    );
  });
};
