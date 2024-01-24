import { TopBannerConnector } from "@/widgets/banner";

type Props = {
  isBannerClosed: boolean;
};

export const MainPage = ({}: Props) => {
  return (
    <div>
      <TopBannerConnector />
    </div>
  );
};
