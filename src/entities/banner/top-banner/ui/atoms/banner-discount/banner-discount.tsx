import { Typography } from "@/shared/ui";
import { useTheme } from "styled-components";

type Props = {
  discount: number;
};

export const BannerDiscount = ({ discount }: Props) => {
  const theme = useTheme();

  return (
    <Typography
      variant="body-bold"
      color={theme.colors.brand.gold}
    >{`${discount}%OFF`}</Typography>
  );
};
