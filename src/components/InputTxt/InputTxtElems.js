import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.25rem;
  position: relative;
`;

export const InuptField = styled.input`
  outline: 0;
  border: 0;
  padding: 0.25rem;
  font-size: 1rem;
  border-bottom: 2px solid ${(props) => (props.error ? "red" : "#ccc")};
  transition: all 0.2s ease-in-out;
  &:focus {
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid ${(props) => (props.error ? "red" : props.color)};
  }
`;

export const InputLabel = styled.label`
  color: ${(props) => (props.error ? "red" : "#666")};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.25rem;
  transition: 0.2s ease all;
  top: -0.75rem;
  font-size: 0.75rem;
  /* 這裡的做法仿造MUI的CSS做法，傳遞Field先後順序要對調，不然效果會出不來 */
  /* 語法上除了提列上面的InputField以外，要注意語法 ~ & {...css} */
  /* 目前controlled的Input可以正常顯示，但uncontrol的Input在label shirnk的時候會有跳不上去的問題 */
  ${InuptField}[value=""] ~ & {
    top: 0.5rem;
    font-size: 1rem;
  }
  ${InuptField}:focus ~ & {
    top: -0.75rem;
    font-size: 0.75rem;
    color: ${(props) => props.color};
  }
`;

export const HelperText = styled.small`
  padding-top: 0.25rem;
  color: ${(props) => (props.error ? "red" : "#666")};
  font-size: 0.5rem;
`;
