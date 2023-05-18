import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
  height: 35rem;
`;
export const Container2 = styled.div`
  display: flex;
`;

export const Instrucciones = styled.div`
  width: 50%;
  padding-left: 2rem;
  display: flex;
`;

export const Img = styled.img`
  width: 50%;
`;
export const Info = styled.div`
  background-color: white;
  width: 50%;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const H2 = styled.h2`
  font-size: 2.5rem;
  line-height: 16px;
  color: crimson;
`;
export const P = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;
export const Span = styled.span`
  font-weight: 900;
`;
export const ButtonBack = styled.button`
  background-color: crimson;
  color: white;
  font-weight: 900;
  border: none;
  padding: 0.5rem;
  width: 20rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #de4c8a;
  }
`;
export const DivButton = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonAdd = styled.button`
  background-color: #FF4D00;
  color: white;
  font-size: 1rem;
  font-weight: 900;
  border: none;
  padding: 0.8rem;
  width: 20rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    background-color: #BD0CE8;
  }
`;
export const ButtonDelete = styled.button`
  background-color: #1484FF;
  color: white;
  font-size: 1rem;
  font-weight: 900;
  border: none;
  padding: 0.8rem;
  width: 20rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    background-color: #E8CB0C;
  }
`;
export const P1 = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
`;
export const Ingredientes = styled.div`
  width: 30%;
`;
export const Preparacion = styled.div`
  width: 70%;
`;
export const Ul = styled.ul`
  font-size: 1.3rem;
`;

export const Ol = styled.ol`
  font-size: 1.3rem;
`;
export const Video = styled.div`
  width: 50%;
`;
