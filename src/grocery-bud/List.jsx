import { Article } from "@mui/icons-material";
import React from "react";

const List = ({ list, handleDelete,handleEdit}) => {
  return (
    <div>
      {list.map((item) => {
        const { id, title } = item;
        return <article key={id}>
            <p>{title}</p>
            <div className="button-container">
                <button onClick={()=>handleEdit(id)}>Edit</button>
                <button onClick={()=> handleDelete(id)}>Delete</button>
            </div>
        </article>;
      })}
    </div>
  );
};

export default List;
