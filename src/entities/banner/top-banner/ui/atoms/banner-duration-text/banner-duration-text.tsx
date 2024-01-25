import {} from "@/shared/theme";
import { Typography } from "@/shared/ui";

type Props = {
  duration: string;
};

export const BannerDurationText = ({ duration }: Props) => {
  return (
    <Typography variant="body-medium">
      Black Friday,
      <Typography variant="body-regular">{` ${duration}`}</Typography>
    </Typography>
  );
};
