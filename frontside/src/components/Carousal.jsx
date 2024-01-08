import React from "react";
import './carousal.css';

const Carousal = () => {

  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{zIndex:"10"}}>
            <form className="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{border:"2px solid rgb(140, 96, 174)"}}
              />
              <button className="btn btn-outline-rgb(140, 96, 174)" id="btns" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="carousel-item active">
            <img
              src="https://www.fnp.com/images/pr/l/v20221130174933/rose-paradise-chocolate-cake-half-kg_1.jpg"
              classNameNameName="d-block w-100"
              alt="cake"
              width="1600" height="900"
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41L12hLwO2L._AC_UF1000,1000_QL80_.jpg  "
              classNameName="d-block w-100"
              alt="cake"
              width="1600" height="900"
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.cakesquarechennaionline.com/wp-content/uploads/2023/08/Punchy-Chocolate-truffle-cake.jpg"
              classNameName="d-block w-100"
              alt="cake"
              width="1600" height="900"
              style={{ filter: "brightness(30%)" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousal;
