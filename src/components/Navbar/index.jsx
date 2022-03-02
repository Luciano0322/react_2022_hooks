import BurgerBtn from "./BurgerBtn";
import PropTypes from "prop-types";
import { NavbarWrapper, OptionsWapper } from "./NavbarElems";

const Navbar = (props) => {
  // 目前以同底色來完成全覆蓋的效果，但無法完成跳色全覆蓋的效果
  // 已知sidebar若存放於navbarWrapper中則無法完成滿版高度覆蓋效果，高度會因外層而受限
  // 全覆蓋效果折衷方案為在sidebar上新增close的btn
  // 最適切的作法應為拆開nav與sidebar的連接
  const burgerChange = (e) => {
    if (e.target.checked) {
      props.sidebarOpen(true);
    } else {
      props.sidebarOpen(false);
    }
  };
  return (
    <header>
      <NavbarWrapper variant={props.variant} bgColor={props.bgColor}>
        <OptionsWapper>{props.children}</OptionsWapper>
        <BurgerBtn onChange={burgerChange} checked={props.opened} />
      </NavbarWrapper>
    </header>
  );
};
Navbar.propTypes = {
  bgColor: PropTypes.string,
  variant: PropTypes.string, // left || right
  sidebarOpen: PropTypes.func,
  opened: PropTypes.bool
};

export default Navbar;
