import { useTheme } from "@/shared/theme";
import { SpacingProps } from "@/shared/theme/spacing";
import { Typography } from "@/shared/ui";
import styled from "styled-components";

const GoldenText = styled(Typography)`
  background: ${({ theme }) => theme.colors.gradients.gold};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

type Props = {
  discount: number;
} & SpacingProps;

export const DiscountPercentage = ({ discount, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <GoldenText
      variant="subheading"
      color={theme.colors.text.goldSubheading}
      {...rest}
    >
      {`${discount}%OFF`}
    </GoldenText>
  );
};
