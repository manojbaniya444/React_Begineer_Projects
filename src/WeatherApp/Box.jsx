import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Box = () => {
  const [search, setSearch] = useState("Damak");
  const [city, setCity] = useState(false);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=93683e0098e0cf7d6f5c634c78e71bfd`
  //       )
  //       .then((res) => {
  //         setCity(res.main);
  //       });
  //   }, [search]);


  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=93683e0098e0cf7d6f5c634c78e71bfd`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      console.log(resJson);
    };
    fetchApi();
  }, [search]);
  //functions
  //   const searchHandler = (e) => {
  //     setSearch(e.target.value);
  //   };
  //   const cityname = search.toUpperCase();
  return (
    <>
      {/* {!city ? (
        <p>City not found</p>
      ) : (
        <div className="box">
          <div className="searchbox">
            <input
              type="search"
              placeholder="Search city here...." value="Pokhara"
              onChange={searchHandler}
            />
          </div>
          <div className="mainbox">
            <h2 className="cityname">{search}</h2>
            <h1 className="temperature">{city.main.temp} degree Fahrenheit</h1>
            <div className="minmax">
              <h3>Minimum: {city.main.temp_min} Fahrenheit</h3>
              <h3>Maximum: {city.main.temp_max} Fahrenheit</h3>
            </div>
          </div>
        </div>
      )}  */}

      <div className="mainbox">
        <div className="searchbox">
          <input
            type="search"
            placeholder="Search city here...."
            defaultValue=""
            //   onChange={searchHandler}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>City Not Found</p>
        ) : (
          <div className="info">
            <h1 className="cityname">{search}</h1>
            <h1 className="temperature">{city.temp} °Celcius</h1>
            <div className="minmax">
              <h3>Minimum: {city.temp_min} °Celcius</h3>
              <h3>Maximum: {city.temp_max} °Celcius</h3>
              <h3>Feels Like: {city.feels_like} °Celcius</h3>
              <h3>Pressure: {city.pressure}</h3>
              <h3>Humidity: {city.humidity}</h3>
            </div>
          </div>

        )}
      </div>
    </>
  );
};

export default Box;