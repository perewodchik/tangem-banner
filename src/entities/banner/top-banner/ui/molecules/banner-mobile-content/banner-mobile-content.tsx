import styled from "styled-components";
import { Typography } from "@/shared/ui";
import { useTheme } from "@/shared/theme";

const Wrapper = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  gap: 8px;
  cursor: default;
  align-items: center;
  min-width: 180px;
`;

type Props = {
  discount: string;
};

export const BannerMobileContent = ({ discount }: Props) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Typography variant="body-medium">
        Black Friday,{" "}
        <Typography
          variant="body-bold"
          color={theme.colors.brand.gold}
        >{`${discount}%OFF`}</Typography>
      </Typography>
    </Wrapper>
  );
};
