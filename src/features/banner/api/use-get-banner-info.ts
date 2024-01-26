import { getBannerInfo } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const GET_BANNER_INFO_KEY = "get-banner-info";

export const useGetBannerInfo = () => {
  return useQuery({
    queryKey: [GET_BANNER_INFO_KEY],
    queryFn: getBannerInfo,
  });
};
