import { useTheme } from "@/shared/theme";
import { Typography } from "@/shared/ui";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.navbar};
  padding: 16px;
  z-index: 10;
`;

export const Navbar = () => {
  const theme = useTheme();

  return (
    <NavbarWrapper>
      <Typography variant="subheading">
        Tangem{" "}
        <Typography color={theme.colors.brand.gold} variant="body-regular">
          TEST TASK
        </Typography>
      </Typography>
    </NavbarWrapper>
  );
};
