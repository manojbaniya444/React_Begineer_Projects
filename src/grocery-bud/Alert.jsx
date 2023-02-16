import React, { useEffect } from "react";

const Alert = ({msg,css,removeAlert,list,alert}) => {
    useEffect (()=>
    {
       const timeout = setTimeout(()=>
        {
            removeAlert();
        },3000)
        return ()=> clearTimeout(timeout);
    },[list,alert])
  return <div className={`alert alert-${css}`}>{msg}</div>;
};

export default Alert;
