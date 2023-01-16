import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import React from "react";

function AllDataAPI() {
  const [results, setResult] = useState([]);
  const [serverLink, setserverLink] = useState(process.env.REACT_APP_SERVER);
  const [showItems, setShowITems] = useState(false);

  useEffect(() => {
    const getMakeup = async () => {
      let resultAPI = await axios.get(`${serverLink}/allproducts`);
      console.log("inside useEffect AllDataAPI", resultAPI.data);
      setResult(resultAPI.data);
      setShowITems(true);
    };
    getMakeup();
  }, []);

  return (
    <div>
      <h1>Get digimon chracters</h1>
      <h3>chosse fav digimon</h3>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {showItems &&
          results.map((item, index) => <Item key={index} item={item} />)}
      </div>
    </div>
  );
}
export default AllDataAPI;
