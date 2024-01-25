import { useTheme } from "@/shared/theme";
import { SpacingProps } from "@/shared/theme/spacing";
import { Typography } from "@/shared/ui";

type Props = {
  promocode: string;
} & SpacingProps;

export const PromocodeText = ({ promocode, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <Typography
      variant="body-medium"
      color={theme.colors.text.caption}
      {...rest}
    >
      {"Use code "}
      <Typography variant="body-medium" color={theme.colors.brand.gold}>
        {promocode}
      </Typography>
      {" at checkout"}
    </Typography>
  );
};
