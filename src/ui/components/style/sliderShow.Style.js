import styled from "@emotion/styled";
export const SlideContainer = styled.div`
position: relative;
`;
export const ContenedorSlideShow = styled.div`
display: flex;
flex-wrap: nowrap;
`;

export const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  position: relative;
  .imagen {
    width: 100%;
    vertical-align: top;
    height: 40rem;
    width: 120rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .imagen1 {
    background-image: url(../../../../assets/images/plato5.jpg);
  }
  .imagen2 {
    background-image: url(../../../../assets/images/plato2.jpg);
  }
  .imagen3 {
    background-image: url(../../../../assets/images/plato3.jpg);
  }
  .imagen4 {
    background-image: url(../../../../assets/images/plato4.jpg);
  }
  .imagen5 {
    background-image: url(../../../../assets/images/plato1.jpg);
  }
  p {
    margin: 0;
  }
  .info-contenedor {
    background-color: rgba(0, 0, 0, 0.295);
    color: white;
    font-weight: 900;
    width: 100%;
    font-size: 4rem;
    margin: 0;
    text-align: center;
    position: absolute;
    top: 0;
    @media (max-width: 769px) {
      position: relative;
      font-size: 2rem;
      background-color: #ff7402;
    }
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  .btn-next,
  .btn-prev {
    pointer-events: all;
    background-color: rgba(252, 104, 5, 0);
    border: none;
    outline: none;
    text-align: center;
    position: absolute;
    transition: all 0.3s ease;
    height: 100%;
    path {
      fill: #ffffff;
    }
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.295);
    }
  }
  .btn-next {
    right: 0;
  }
`;
