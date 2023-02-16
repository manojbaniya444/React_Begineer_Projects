import React from "react";
import "./style.css";
import { FcNext } from "react-icons/fc";
import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchAPI = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setList(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const { id, title, dates, duties, company } = list[value];
  return (
    <main>
      <h1 className="heading">experience</h1>
      <div className="flex">
        <div className="button-container">
          {list.map((item, index) => {
            return (
              <button key={index} className={`company-btn ${index === value && "active"}`} onClick={()=> setValue(index)}>
                {item.company}
              </button>
            );
          })}
        </div>
        <section>
          <h2 className="title">{title}</h2>
          <p className="company">{company}</p>
          <p className="dates">{dates}</p>
          <div className="duties">
            {duties.map((duty, id) => {
              return (
                <p key={id} className="duty">
                  <FcNext className="icon"/>
                  {duty}
                </p>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
