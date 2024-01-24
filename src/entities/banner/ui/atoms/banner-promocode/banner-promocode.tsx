import { useTheme } from "@/shared/theme";
import { Typography } from "@/shared/ui";

type Props = {
  promocode: string;
};

export const BannerPromocode = ({ promocode }: Props) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <Typography variant="body-regular">
      Use Code{" "}
      <Typography variant="body-bold" color={theme.brand.gold}>
        {" "}
        {promocode}
      </Typography>
      {" at checkout"}
    </Typography>
  );
};
