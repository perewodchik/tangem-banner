export type GetBannerInfoResponse = {
  promotionName: string;
  duration: string;
  link: string;
  promocode: string;
  promocodeDiscount: number;
};

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
      2000
    );
  });
};
