import { BurgerWrapper } from "./NavbarElems";
import PropTypes from "prop-types";

const BurgerBtn = (props) => {
  return (
    <BurgerWrapper htmlFor="burger">
      <input
        type="checkbox"
        id="burger"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span></span>
      <span></span>
      <span></span>
    </BurgerWrapper>
  );
};

BurgerBtn.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default BurgerBtn;
