import React, { useEffect, useState } from "react";
import "../Style/BestSeller_Slider.css";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md"
import axios from "axios";
import { Box, Button } from "@chakra-ui/react";
 
const Slider = ({props}) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get("https://liciousdata.herokuapp.com/Bestseller")
        .then((res) => {setData(res.data)});
    },[])
    console.log(data)

    const slideLeft = () =>{
       var slider = document.getElementById("slider");
       slider.scrollLeft = slider.scrollLeft - 400;
    }

    const slideRight = () =>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 400;
     }


     const ADDTOCARTBUTTON=()=>{
        const [check,setcheck]=useState(0)
        return(<>
          { (check<1 &&  <Button onClick={()=>setcheck(1)}
          style={{backgroundColor:"#D11243",color:"white", fontSize: "13px",fontWeight: "600",height: "30px",width: "100px"}}>ADD TO CART</Button>)
          ||(
           check>=1 && <Box>
            <Button style={{backgroundColor:"white",fontSize:"30px",
          color:"#D11243"}}  onClick={()=>setcheck(check-1)}>-</Button>
            <Button style={{backgroundColor:"white",fontSize:"20px",
          }}  >{check}</Button>
            <Button
             style={{backgroundColor:"white",fontSize:"30px",
          color:"#D11243"}} onClick={()=>setcheck(check+1)}>+</Button>
           </Box>
          )}</>)
      }


    return(
        <div className="main_slider_container">
            <MdKeyboardArrowLeft size={40} className="slider_icon_left" onClick={slideLeft} />
            <div id="slider">
             {data.map((slide)=> {
                return(
                    <div className="slider_card">
                        <div id="image"><img src={slide.image} alt="image" /></div>
                        <div id="heading"><p>{slide.name}</p></div> 
                        <div id="para"><p>{slide.des}</p></div>
                        <div id="wt"><p>{slide.weight}</p></div>
                        <div id="blook">
                            <p style={{ color: "#e1003e", fontWeight: "700" }}>MRP:  ₹{slide.markprice}</p>
                            <ADDTOCARTBUTTON/>
                        </div>
                    </div>
                )})}
            </div>
            <MdKeyboardArrowRight size={40} className="slider_icon_right" onClick={slideRight} />
        </div>
    )
}

export default Slider;