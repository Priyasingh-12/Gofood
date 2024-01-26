   /* ================================ */
   import React, { useEffect } from 'react';
   import Card from '../components/Card';
   import { useState } from 'react';
   import '../components/carousal.css';
   const Home = () => {
    
       const [foodCat, setFoodCat] = useState([])
       const [foodItems, setFoodItems] = useState([])
       const [search, setSearch] = useState('')


     const loadData = async () => {
   
       try {
           let response = await fetch("http://localhost:8000/api/foodData", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
           });
   
           if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
           }
   
   
           const data = await response.json();
           setFoodItems(data[0]);
           setFoodCat(data[1]);
       } catch (error) {
           console.error("Error fetching data:", error);
           // Handle the error (e.g., show a user-friendly message)
       }
   
     }    
   
           useEffect(() => {
               loadData()
           },[])
   
   
       return (  
           <>
           <div>
           <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"style={{objectFit:"contain !important"}}>
       
       
           <div className="carousel-inner " id='carousel'>
           <div className="carousel-caption" style={{zIndex:"10"}}>
              <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <button className="btns" onClick={() => { setSearch('') }}>Search</button>
              </div>
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
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

      </div>

        </div>
          
         <div className="container">
           
         {
          foodCat !== 0
            ? foodCat.map((data) => {
              return (
                // justify-content-center
                <div className='row mb-3'>
                  <div key={data.id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(22, 77, 22),rgb(0, 0, 0))" }} />
                  {foodItems !== 0 ? foodItems.filter(
                    (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          {console.log(filterItems.url)}
                          <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )
            })
            : ""}
          </div>
           </>
       );
   }
    
   export default Home;