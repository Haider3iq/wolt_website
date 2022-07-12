import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import pMinDelay from "p-min-delay";
import loadable from "@loadable/component";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import ChartDonught2 from "../Sego/Home/donught2";

import BarChart from "../Sego/Home/BarChart";
// import RadialBarChart from "../Sego/Home/RadialBarChart";

import { FAST_FOOD, MONEY, NOTE, CONTACT_PERSON} from "../SVGComponent/SVGICON";


// // Map
// import World from "@svg-maps/world";
// import { SVGMap } from "react-svg-map";
// //** Import Image */




import SummaryWidget from "../CustomeComponents/SummaryWidget";
import RevenueWidget from "../CustomeComponents/RevenueWidget";
import CustomerMapWidget from "../CustomeComponents/CustomerMapWidget";
import SquareWidget from "../CustomeComponents/SquareWidget";
import DailylListWidget from "../CustomeComponents/DailyListWidget";
import HorizontalMealList from "../../MyComponents/HorizontalMenuList";


import "../../../css/homePage.css"
import AdHorizontalList from "../../MyComponents/AdHorizontalList";
import HorizontalFoodList from "../../MyComponents/HorizontalFoodList";
import AdCarousel from "../../MyComponents/AdCarousel";


export default function Home() {
  



  useEffect(() => {
  document.querySelector("#BarChart canvas").classList.add("lineChart");
  });

  

  const Title = ({title}) => {

    return(
      <div className="titleDiv">
        <div className="titleText">{title}</div>
      </div>
    )
  } 








  return (
    <div className="HomeDiv" >
            <div className="sdfasdf" id="BarChart">
                    <BarChart />
             </div>

             {/* // Horizontal add list #111*/}
             <Title title={"Deals and discounts"}/>
              <AdHorizontalList/>


              {/* // Horizontal meal list #222*/}
              <Title title={"Menu"}/>
              <HorizontalMealList/>




              {/* //Ad carsol #333 */}
              {/* <AdCarousel/> */}












              <Title title={"Deals and discounts"}/>
              <AdHorizontalList/>









              {/* // Horizontal meal list #444*/}
              <Title title={"Random meals"}/>
              <HorizontalFoodList/>


      

              


             
    </div>
  );
}

