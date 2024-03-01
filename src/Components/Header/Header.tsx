import {
  BtnLogIn,
  BtnRegister,
  BtnWrapper,
  FlagIcon,
  HeaderWrapper,
  LinkLogo,
  LogoWrapper,
  NavItems,
  NavList,
  Svg,
} from "./Header";
import sprite from "../../images/sprite.svg";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <FlagIcon />
        <LinkLogo>LearnLingo</LinkLogo>
      </LogoWrapper>
      <nav>
        <NavList>
          <li>
            <NavItems to="/">Home</NavItems>
          </li>
          <li>
            <NavItems to="/teacher">Teachers</NavItems>
          </li>
        </NavList>
      </nav>
      <BtnWrapper>
        <BtnLogIn>
          <Svg>
            <use href={`${sprite}#log-in`}></use>
          </Svg>
          Log in
        </BtnLogIn>
        <BtnRegister>Registration</BtnRegister>
      </BtnWrapper>
    </HeaderWrapper>
  );
};

export default Header;