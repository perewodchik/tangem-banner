import {} from "@/shared/theme";
import { Typography } from "@/shared/ui";

type Props = {
  promotionName: string;
  duration: string;
};

export const BannerDurationText = ({ promotionName, duration }: Props) => {
  return (
    <Typography variant="body-medium">
      {`${promotionName}, `}
      <Typography variant="body-regular">{` ${duration}`}</Typography>
    </Typography>
  );
};
