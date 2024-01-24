import { MainPage } from "./main-page";

export const MainPageConnector = () => {
  const isBannerClosed = false;
  // const [isPageLoading, setIsPageLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setIsPageLoading(false), 2000);
  // }, [setIsPageLoading]);

  return <MainPage isBannerClosed={isBannerClosed} />;
};
