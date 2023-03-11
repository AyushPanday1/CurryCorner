import React from 'react'
import "./Carousel.css"



function Carousel() {
    return (
        <div id='CarouselBox'>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src="https://c.ndtvimg.com/2022-03/g7o39j38_pizza_625x300_30_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item"  data-bs-interval="4000">
                        <img src="https://s1.dmcdn.net/v/TB_7K1X7h6b6YHmyG/x1080" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="https://bosskitchen.com/wp-content/uploads/2020/12/Three-Chocolates.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="https://c.ndtvimg.com/2021-12/jl0b9flo_spring-rolls_625x300_22_December_21.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="http://lh3.googleusercontent.com/7ioE448m-0sIyHvDwIA55j1KV_TunnNzp5PgT9j0Yf2g8umjpjNdvMatNAKLlTaqo6e00mOPVYb_EIZ48373BaEwj2VM=s750" className="d-block w-100" alt="..."/>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel