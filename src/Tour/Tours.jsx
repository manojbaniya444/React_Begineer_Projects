import React, { useState } from "react";

const Tours = ({ id, name, info, price, image,interestHandler }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article>
      <img src={image} alt={name} />
      <div className="flex-two">
        <p>{name}</p>
        <p>${price}</p>
      </div>
      <p className="info">
        {readMore ? info : info.substring(0, 100)}
        <button className="button-more" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show less" : "Read more..."}
        </button>
      </p>
      <button className="button" onClick={()=> interestHandler(id)}>Not Interested</button>
    </article>
  );
};

export default Tours;
