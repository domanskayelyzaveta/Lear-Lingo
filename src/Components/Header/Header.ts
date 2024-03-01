import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  padding: 30px 128px;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
`;

export const FlagIcon = styled.div`
  width: 28px;
  height: 28px;

  border-radius: 50%;
  background-image: linear-gradient(
    to bottom,
    var(--flag-blue) 50%,
    var(--flag-yellow) 50%
  );
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const LinkLogo = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: var(--text-color);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 28px;
`;

export const NavItems = styled(NavLink)`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--text-color);
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;

export const BtnLogIn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border: none;
  background: transparent;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: var(--text-color);
`;

export const BtnRegister = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  padding: 14px 39px;
  color: var(--white);

  border-radius: 12px;
  background: var(--text-color);
`;
