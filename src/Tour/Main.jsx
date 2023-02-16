import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

const url = "https://course-api.com/react-tours-project";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const interestHandler = (id) => {
    const newTour = tour.filter((tourItem) => tourItem.id !== id);
    setTour(newTour);
    console.log(newTour);
  };
  const fetchAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
    //   console.log(data);
      setLoading(false);
      setTour(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (loading) {
    return <Loading />;
  } 
  
  if(tour.length === 0)
  {
    return(
        <>
        <h1 className="title">No tours left to show</h1>
        <button className="refresh" onClick={()=>fetchAPI()}>Refresh</button></>
    )
  }
  
  else {
    return <Tour tour={tour} interestHandler={interestHandler} />;
  }
};

export default Main;
