import { FloatingBannerConnector, TopBannerConnector } from "@/widgets/banner";
import { PageLayout } from "@/widgets/layout";

type Props = {
  isBannerClosed: boolean;
};

export const MainPage = ({}: Props) => {
  return (
    <PageLayout>
      <TopBannerConnector />
      <FloatingBannerConnector />
    </PageLayout>
  );
};
