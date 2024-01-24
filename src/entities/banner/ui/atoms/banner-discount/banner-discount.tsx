import { Typography } from "@/shared/ui";
import { useTheme } from "styled-components";

type Props = {
  discount: string;
};

export const BannerDiscount = ({ discount }: Props) => {
  const theme = useTheme();

  return (
    <Typography
      variant="body-bold"
      color={theme.brand.gold}
    >{`${discount}%OFF`}</Typography>
  );
};
