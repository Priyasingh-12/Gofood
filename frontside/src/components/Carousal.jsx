import React from "react";
import './carousal.css';

const Carousal = () => {

  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"style={{objectFit:"contain !important"}}>
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
              src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1706080589~exp=1706081189~hmac=b517abd3f480668bca6240a0812aee48afc41d8c3deb29ef3e0f1ddfaad9727a"
              classNameNameName="d-block w-100"
              alt="cake"
              width="1600" height="900"
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/1938676873/display_1500/stock-photo-two-delicious-homemade-burgers-of-beef-cheese-and-vegetables-on-an-old-wooden-table-fat-unhealthy-1938676873.jpg  "
              classNameName="d-block w-100"
              alt="cake"
              width="1600" height="900"
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/839958568/photo/dim-sum.jpg?s=2048x2048&w=is&k=20&c=7w0W-WauMTacz2nJmKkYVw50LqQvxxDFLLtt0hpBrCc="
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
