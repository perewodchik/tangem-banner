import { FloatingBannerConnector, TopBannerConnector } from "@/widgets/banner";
import { PageLayout } from "@/widgets/page-layout";

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
