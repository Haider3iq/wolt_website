import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { 
    IoHomeOutline, IoHome, 
    IoRestaurantOutline, IoRestaurant,
    IoStorefrontOutline, IoStorefront,
    IoSearchOutline, IoSearch,
    IoSettingsOutline, IoSettings,
    IoPersonOutline, IoPerson
  
  } from "react-icons/io5";

import "../../../css/mobileCss.css"
  
import { 
    RiUserLocationFill, RiUserLocationLine 
  } from "react-icons/ri";




export default function MobileNavigation({}) {


    
  const tabData = [
    {
      name: 'Home',
      activeIcon: 'IoRestaurantOutline',
      path: '/dashboard',
      content:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    },
    {
      name: 'Profile',
      icon: 'user',
      path: '/orders',
      content:
        "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
    },
    {
      name: 'Contact',
      icon: 'phone',
      path: '/general-customers',
      content:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    },

    {
      name: 'Message',
      icon: 'envelope',
      path: '/task',
      content:
        "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
    },
  ]


      
  const PATH = window.location.pathname

  const [iconArray, setIconArray] = useState({})


  useEffect(() => {
    console.log("testPath: ", PATH)
    setIconArray(tabData.filter(item => PATH.includes(item.path))[0])
    console.log("test: ", iconArray?.icon)

  }, [PATH])








  const Navgiation = ({}) => {

    return (
      <>
            {/* <!-- Nav tabs --> */}
          <div className='mobile-navigation'>
                  {tabData.map((data, i) => {
                      
                    return (
                        <Link className={iconArray?.name == data.name ? "active-nav-link" : "custom-nav-link"} to={data.path}>
                        {/* <i className={`la la-angle-left`} /> */}
                        
                       {iconArray?.name !== data.name && <i className="un-active">
                        {i == 0 && <IoHomeOutline/>} 
                        {i == 1 && <IoRestaurantOutline/>} 
                        {i == 2 && <IoStorefrontOutline/>}  
                        {i == 3 && <RiUserLocationLine/>}
                        </i>}
                        {iconArray?.name == data.name && <i className="active">
                        {i == 0 ? <IoHome/> : 
                        i == 1 ? <IoRestaurant/> : 
                        i == 2 ? <IoStorefront/> : 
                        <RiUserLocationFill/>
                        } 
                        </i>}
  
                        </Link>
                  )})}
            </div>
  
      </>
  )
  }





    return(
        <div className="mobileNavigationDiv">
          <Navgiation/>
        </div>
    )
}