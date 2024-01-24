type Props = {
  isBannerClosed: boolean;
};

export const MainPage = ({ isBannerClosed }: Props) => {
  return <div>{isBannerClosed ? "closed" : "not closed"}</div>;
};
