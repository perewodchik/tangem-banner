import { SpacingProps } from "@/shared/theme/spacing";
import { Typography } from "@/shared/ui";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
} & SpacingProps;

export const PromotionEventName = ({ children, ...rest }: Props) => {
  return (
    <Typography variant="heading" {...rest}>
      {children}
    </Typography>
  );
};
