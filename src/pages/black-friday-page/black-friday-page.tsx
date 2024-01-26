import { useTheme } from "@/shared/theme";
import { Typography } from "@/shared/ui";
import { LinkButton } from "@/shared/ui/atoms";
import { CenteredContentLayout } from "@/widgets/layout";

export const BlackFridayPage = () => {
  const theme = useTheme();

  return (
    <CenteredContentLayout backgroundColor={theme.colors.common.black}>
      <Typography mb={12} variant="heading">
        Black friday
      </Typography>
      <LinkButton link="/">Go back</LinkButton>
    </CenteredContentLayout>
  );
};
