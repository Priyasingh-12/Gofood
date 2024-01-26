import React from "react";


const Card = (props) => {
  let options = props.options;
  let priceOptions = Object.keys(options);

  return (

    <>
      <div >
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight":"360px"  }}>
        <img src={props.ImgSrc} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body"   style={{ background: "#202225", color:"white" ,borderRadius: "5px" }}>
            <h5 className="card-title">{props.foodName}</h5>
            <p className="card-text">Some important</p>
            <div className="container w-100">
              <select
                className="m-2 h-100 "
                style={{ background: "rgb(22, 77, 22)", borderRadius: "5px" ,color:"white" }}
              >
                {Array.from(Array(7), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select
                className="m-2 h-100 "
                style={{ background: "rgb(22, 77, 22)", borderRadius: "5px",color:"white" }}
              >
                {priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>
              })}
              </select>

              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
