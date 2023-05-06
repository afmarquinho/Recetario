import styled from "@emotion/styled";

export const CardContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 20rem;
  height: 15rem;
`;

export const IMG = styled.img`
  width: 100%;
  height: 100%;
`;
export const Div = styled.div`
  background-color: maroon;
  background-color: #d8b4ff;
  position: absolute;
  width: 20rem;
  height: 5rem;
  bottom: 0;
  padding: 0 1rem;
`;
export const P = styled.p`
  color: black;
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 16px;
`;
export const Button = styled.button`
  background-color: rgb(219, 204, 204);
  position: absolute;
  border: none;
  top: 0;
  right: 0;
  &:hover {
    cursor: pointer;
  }
`;
