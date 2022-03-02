import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 3.5rem;
  background: ${(props) => props.bgColor || '#ccc'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  padding: 0.5rem 0;
  ${(props) => props.variant === "left" && `flex-direction: row-reverse;`}
`;

export const OptionsWapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const BurgerWrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: 60px;
  margin: 0 0.25rem;
  padding-right: 0.5rem;
  z-index: 100;
  cursor: pointer;
  span {
    background: #fff;
    border-radius: 10px;
    height: 7px;
    margin: 5px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  span:nth-of-type(1) {
    width: 50%;
  }
  span:nth-of-type(2) {
    width: 100%;
  }
  span:nth-of-type(3) {
    width: 75%;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(8px, 0px);
  }
  input[type="checkbox"]:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg) translate(-1px, 0px);
  }
  input[type="checkbox"]:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 55%;
    transform: translate(24px, -9px) rotatez(45deg);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
