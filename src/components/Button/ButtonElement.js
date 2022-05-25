import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonBase = styled.button`
  box-sizing: border-box;
  border-radius: .75rem;
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
  color: ${(props) => {
    const variant = props.variant;
    switch (variant) {
      case "containted":
        return "white";
      case "outlined":
        return props.color ? props.color : props.theme.colors.primary;
      default:
        return props.color ? props.color : props.theme.colors.primary;
    }
  }};
  border: ${(props) =>
    props.variant === "outlined" ? `2px solid ${props.theme.colors.primary}` : 0};
  background: ${(props) => {
    const variant = props.variant;
    switch (variant) {
      case "outlined":
        return "white";
      case "containted":
        return props.color ? props.color : props.theme.colors.primary;
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
          return props.color ? props.color : props.theme.colors.primary;
        case "containted":
          return props.color ? props.color : props.theme.colors.primaryLight;
        default:
          return "rgba(0,0,0,0.2)";
      }
    }};
    color: ${(props) => {
      const variant = props.variant;
      switch (variant) {
        case "outlined":
          return props.color ? props.color : "white";
        case "containted":
          return props.color ? props.color : "white";
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

export const ButtonLink = styled(Link)`
  box-sizing: border-box;
  border-radius: .75rem;
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
  color: ${(props) => {
    const variant = props.variant;
    switch (variant) {
      case "containted":
        return "white";
      case "outlined":
        return props.color ? props.color : props.theme.colors.primary;
      default:
        return props.color ? props.color : props.theme.colors.primary;
    }
  }};
  border: ${(props) =>
    props.variant === "outlined" ? `2px solid ${props.theme.colors.primary}` : 0};
  background: ${(props) => {
    const variant = props.variant;
    switch (variant) {
      case "outlined":
        return "white";
      case "containted":
        return props.color ? props.color : props.theme.colors.primary;
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
          return props.color ? props.color : props.theme.colors.primary;
        case "containted":
          return props.color ? props.color : props.theme.colors.primaryLight;
        default:
          return "rgba(0,0,0,0.2)";
      }
    }};
    color: ${(props) => {
      const variant = props.variant;
      switch (variant) {
        case "outlined":
          return props.color ? props.color : "white";
        case "containted":
          return props.color ? props.color : "white";
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