import styled from "styled-components";

export const InputContainer = styled.input`
  width: 100%;
  height: 60px;
  color: ${(props) => props.theme.colors.title};
  border: 1px solid ${(props) => props.theme.colors.line_input};
  border-radius: 8px;
  padding: 0 24px;
`;
