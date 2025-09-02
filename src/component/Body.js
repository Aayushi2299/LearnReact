import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

  const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const RestCard = ({ res }) => {
  return (
    
    <div className="rest-card">
      <img
        className="card-img"
        src={IMG_CDN_URL + res?.info?.cloudinaryImageId}
        alt={res?.info?.name}
      />
      <h3>{res.info.name}</h3>
      <p>{res.info.cuisines.join(", ")}</p>
      <p>{res.info.avgRating}</p>
    </div>
  );
};




const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [listoffilteredRestaurants, setlistoffilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");
  useEffect(() => {
  fetchData();
}, []);


const fetchData = async() => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8449705&lng=80.8908218&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
 

  const json = await data.json();
  console.log(json);
  const restaurantCards =
    json?.data?.cards?.find(
      (c) =>
        c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  setFilteredRestaurants(restaurantCards);
  setlistoffilteredRestaurants(restaurantCards);
};

  const handleTopRestaurant = () => {
    const filtered = filteredRestaurants.filter(
      (res) => res.info.avgRating > 4.2
    );
    setFilteredRestaurants(filtered);
  };

  return filteredRestaurants.length===0 ? <Shimmer/>:(
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e)=>setsearchText(e.target.value)}></input>
        <button onClick={()=>{
         const filteredcafename= filteredRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
         setlistoffilteredRestaurants(filteredcafename);
        }}>search</button>
        <button onClick={handleTopRestaurant}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {listoffilteredRestaurants.map((res) => (
          <RestCard key={res.info.id} res={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;