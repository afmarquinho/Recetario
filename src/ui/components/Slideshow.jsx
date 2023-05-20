import { useRef } from "react";
import {
  Slide,
  ButtonContainer,
  SlideContainer,
  ContenedorSlideShow,
} from "./style/sliderShow.Style";

const Slideshow = ()=>{
const siguiente=()=>{

}
const anterior=()=>{

}
  
  return (
    <SlideContainer className="slide-container">
      <ContenedorSlideShow >
        <Slide className="slide">
          <div className="imagen imagen1"></div>
          <div className="info-contenedor">
            <p>Descripcion de la imagen</p>
          </div>
        </Slide>

        <Slide className="slide">
          <div className="imagen imagen2"></div>
          <div className="info-contenedor">
            <p>Descripcion de la imagen</p>
          </div>
        </Slide>

        <Slide className="slide">
          <div className="imagen imagen3"></div>
          <div className="info-contenedor">
            <p>Descripcion de la imagen</p>
          </div>
        </Slide>

        <Slide className="slide">
          <div className="imagen imagen4"></div>
          <div className="info-contenedor">
            <p>Descripcion de la imagen</p>
          </div>
        </Slide>

        <Slide className="slide">
          <div className="imagen imagen5"></div>
          <div className="info-contenedor">
            <p>Descripcion de la imagen</p>
          </div>
        </Slide>
      </ContenedorSlideShow>

      <ButtonContainer className="controles">
        <button className="btn-next" onClick={siguiente}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 96 960 960"
            width="50"
            >
            <path d="m255 815-42-42 198-198-198-198 42-42 240 240-240 240Zm253 0-42-42 198-198-198-198 42-42 240 240-240 240Z" />
          </svg>
        </button>
        <button className="btn-prev" onClick={anterior}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 96 960 960"
            width="50"
            >
            <path d="M453 815 213 575l240-240 42 42-198 198 198 198-42 42Zm253 0L466 575l240-240 42 42-198 198 198 198-42 42Z" />
          </svg>
        </button>
      </ButtonContainer>
    </SlideContainer>
  );
};


export default Slideshow;
