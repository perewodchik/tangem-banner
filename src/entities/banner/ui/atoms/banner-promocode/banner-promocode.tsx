import { useDeviceSize, useTheme } from "@/shared/theme";
import { Typography } from "@/shared/ui";

type Props = {
  promocode: string;
};

export const BannerPromocode = ({ promocode }: Props) => {
  const theme = useTheme();
  const deviceSize = useDeviceSize();

  return (
    <Typography variant="body-regular">
      Use Code{" "}
      <Typography variant="body-bold" color={theme.colors.brand.gold}>
        {" "}
        {promocode}
      </Typography>
      {deviceSize === "lg" ? " at checkout" : null}
    </Typography>
  );
};
