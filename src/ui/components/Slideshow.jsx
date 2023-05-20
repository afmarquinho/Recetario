import { useRef, useEffect } from "react";
import {
  Slide,
  ButtonContainer,
  SlideContainer,
  ContenedorSlideShow, SlideMain
} from "./style/sliderShow.Style";

const Slideshow = () => {
  const slideshow = useRef(null);
  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `3000ms ease-out all`;
      const tamanoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamanoSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(primerElemento);
        slideshow.current.removeEventListener("transitionend", transicion);
      };
      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    console.log("Anterior");
    if (slideshow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow.
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `3000ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };
  // useEffect(()=>{
  //   setInterval(() => {
  //     siguiente()
  //   }, 5000);
  // }, [])
  return (
    <SlideMain className="slide-main">
      <SlideContainer className="slide-container">
        <ContenedorSlideShow ref={slideshow}>
          <Slide className="slide">
            <div className="imagen imagen1"></div>
            <div className="info-contenedor">
              <p>Cocina como un experto</p>
            </div>
          </Slide>

          <Slide className="slide">
            <div className="imagen imagen2"></div>
            <div className="info-contenedor">
              <p>Recetas fáciles de preparar</p>
            </div>
          </Slide>

          <Slide className="slide">
            <div className="imagen imagen3"></div>
            <div className="info-contenedor">
              <p>Lo mejor de la cocina Latina</p>
            </div>
          </Slide>

          <Slide className="slide">
            <div className="imagen imagen4"></div>
            <div className="info-contenedor">
              <p>Escucha nuestros Podcasts</p>
            </div>
          </Slide>

          <Slide className="slide">
            <div className="imagen imagen5"></div>
            <div className="info-contenedor">
              <p>Manos a la obra!!!</p>
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
    </SlideMain>
  );
};

export default Slideshow;
