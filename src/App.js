    import React from "react";
    import ReactDOM from "react-dom/client"  
    import Header  from "./component/Header";
    import Body from "./component/Body";

    /*const heading = React.createElement("h1",{id:"heading"},"Hello from React APP");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);*/
    const Componet =()=><h1> Hello from functional component</h1>;
    const heading2 = <h1>Hello from JSX</h1>
    console.log(heading2);
    
const resObj = {
  restaurants: [
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "636724",
        name: "Big Bowl",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_636724.JPG",
        locality: "Umrao Mall",
        areaName: "Mahanagar",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Tibetan", "Desserts"],
        avgRating: 4.4,
        parentId: "434792",
        avgRatingString: "4.4",
        totalRatingsString: "1.4K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 9.8,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "9.8 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-08-26 01:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹129"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      }
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "636723",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        locality: "Mahanagar",
        areaName: "Mahanagar",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.2,
        parentId: "61955",
        avgRatingString: "4.2",
        totalRatingsString: "2.4K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 8.5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "8.5 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-08-26 00:30:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      }
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "23683",
        name: "Pizza Hut",
        cloudinaryImageId: "1e84f6dd1fdc2d33feb1f9440c82ab5c",
        locality: "Aliganj",
        areaName: "Kapoorthala",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        parentId: "721",
        avgRatingString: "4.1",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 6.2,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "6.2 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-08-26 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "Flat ₹125 OFF",
          subHeader: "on orders above ₹499"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      }
    }
  ]
};



 const RestCard =({resObj})=>{
    return(  
    <div className="restdata">
        {
        resObj.restaurants.map((restaurant) => (
        <div key={restaurant.info.id} className="rest-card">
          <img className="card-img" alt="restimg" src={`https://res.cloudinary.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`}></img>  
          <h3>{restaurant.info.name}</h3>
          <p>{restaurant.info.cuisine}</p>
          <p>{restaurant.info.cost}</p>
        </div>
      ))}
        
    </div>);
  
 }
  
    
 
    const App = ()=> (
            <div className="app">
               <Header/>
               <Body/>
        </div>);
  
     
 
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App/>);

    

