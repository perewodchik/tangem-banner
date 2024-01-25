import { Typography } from "@/shared/ui";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brand.gold};
`;

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Typography variant="heading">Tangem Logo</Typography>
    </NavbarWrapper>
  );
};
