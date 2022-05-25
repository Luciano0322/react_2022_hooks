import PropTypes from "prop-types";
import { ButtonBase, ButtonLink } from "./ButtonElement";

const Button = (props) => {
  return (
    props.link ?
    <ButtonLink
      type={props.type}
      color={props.color}
      onClick={props.onClick}
      variant={props.variant}
      p={props.p}
      m={props.m}
      to={props.to}
    >
      {props.children}
    </ButtonLink>
    : <ButtonBase
      type={props.type}
      color={props.color}
      onClick={props.onClick}
      variant={props.variant}
      p={props.p}
      m={props.m}
    >
      {props.children}
    </ButtonBase>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  link: PropTypes.bool,
  to: PropTypes.string,
};

export default Button;