import styled from "styled-components";

export const ButtonBase = styled.button`
  box-sizing: border-box;
  border-radius: 25px;
  /* color: inherit; */
  border: 0;
  cursor: pointer;
  outline: 0;
  display: inline-flex;
  position: relative;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  color: ${(props) => (props.variant === "containted" ? "#fff" : props.color)};
  border: ${(props) =>
    props.variant === "outlined" ? `2px solid ${props.color}` : 0};
  background: ${(props) => {
    const variant = props.variant;
    switch (variant) {
      case "outlined":
        return "#fff";
      case "containted":
        return props.color;
      default:
        return "transparent";
    }
  }};
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => {
      const variant = props.variant;
      switch (variant) {
        case "outlined":
          return props.color;
        case "containted":
          return props.color;
        default:
          return "rgba(0,0,0,0.2)";
      }
    }};
    color: ${(props) => {
      const variant = props.variant;
      switch (variant) {
        case "outlined":
          return "#fff";
        case "containted":
          return "#fff";
        default:
          return props.color;
      }
    }};
    filter: brightness(1.5);
  }
  &:active {
    transition: all 0.2s ease-in-out;
    filter: brightness(0.5);
  }
`;
