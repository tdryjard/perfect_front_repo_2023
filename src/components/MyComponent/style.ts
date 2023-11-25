import styled from "styled-components";

interface MyStyledComponentProps {
  isUserGet: boolean;
}

export const UserCard = styled.div<MyStyledComponentProps>`
  width: 100px;
  height: 100px;
  border: 3px solid ${(props) => (props.isUserGet ? "green" : "red")};
`;
