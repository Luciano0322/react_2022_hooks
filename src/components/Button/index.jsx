import PropTypes from "prop-types";
import { ButtonBase } from "./ButtonElement";

const Button = (props) => {
  return(
    <ButtonBase
      type={props.type}
      color={props.color}
      onClick={props.onClick}
      variant={props.variant}
      p={props.p}
      m={props.m}
    >
      {props.children}
    </ButtonBase>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
};

export default Button;