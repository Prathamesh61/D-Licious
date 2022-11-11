import React, { useEffect, useState } from "react";
import "../Style/Boneless_Slider.css";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md"
import axios from "axios";
 
const Slider2 = ({props}) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get("https://liciousdata.herokuapp.com/Boneless")
        .then((res) => {setData(res.data)});
    },[])
    console.log(data)

    const slideLeft1 = () =>{
       var slider1 = document.getElementById("slider1");
       slider1.scrollLeft = slider1.scrollLeft - 400;
    }

    const slideRight1 = () =>{
        var slider1 = document.getElementById("slider1");
        slider1.scrollLeft = slider1.scrollLeft + 400;
     }

    return(
        <div className="main_slider_container1">
            <MdKeyboardArrowLeft size={40} className="slider_icon_left1" onClick={slideLeft1} />
            <div id="slider1">
             {data.map((slide)=> {
                return(
                    <div className="slider_card1">
                        <div id="image"><img src={slide.image} alt="image" /></div>
                        <div id="heading"><p>{slide.name}</p></div> 
                        <div id="para"><p>{slide.des}</p></div>
                        <div id="wt"><p>{slide.weight}</p></div>
                        <div id="blook">
                            <p style={{ color: "#e1003e", fontWeight: "700" }}>MRP:  ₹{slide.markprice}</p>

                            {/* {count === 0 ? ( */}
                            <button className="sigbudiv">
                                ADD TO CART
                            </button>
                            {/* ) : ( */}
                            {/* <div style={{ marginLeft: "20px" }}>
                                <button
                                onClick={handledelcount}
                                style={{ border: "1px solid #e1003e" }}
                                >
                                -
                                </button>{" "}
                                <b>{count}</b>{" "}
                                <button
                                onClick={handleccount}
                                style={{ border: "1px solid #e1003e" }}
                                >
                                +
                                </button>
                            </div> */}
                            {/* )} */}
                        </div>
                    </div>
                )})}
            </div>
            <MdKeyboardArrowRight size={40} className="slider_icon_right1" onClick={slideRight1} />
        </div>
    )
}

export default Slider2;