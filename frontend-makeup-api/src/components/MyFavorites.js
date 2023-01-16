import { useEffect, useState } from "react";
import axios from "axios";
import FavItem from "./FavItem";
import UpdateMakeupModal from "./UpdateDigimonModal";
import React from "react";

function MyFavorites() {
  const [results, setResults] = useState([]);
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
  const [showItems, setShowItems] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  const [index, setIndex] = useState(0);
  const [showUpdateModalStatus, setShowUpdateModalStatus] = useState(false);

  useEffect(() => {
    const getFavMakeup = async () => {
      let resultMakeup = await axios.get(`${serverLink}/product`);
      // console.log("getFavDigimon", resultDigimon);
      setResults(resultMakeup.data);
      setShowItems(true);
    };
    getFavMakeup();
  }, []);

  const deleteMakeup = async (index) => {
    let resultsMakeup = await axios.delete(`${serverLink}/product/${index}`);
    setResults(resultsMakeup.data);
    // setShowItems(true);
  };

  const showUpdateModal = async (chosenItem) => {
    setShowUpdateModalStatus(true);
    setItemInfo(chosenItem);
    setIndex(chosenItem._id);
  };

  const handleCloseUpdate = () => {
    setShowUpdateModalStatus(false);
  };

  const updateMakeups = (results) => {
    setResults(results);
  };

  return (
    <div>
      <h1>Your Favorites Digimon</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {showItems &&
          results.map((item, index) => (
            <FavItem
              key={index}
              item={item}
              deleteMakeup={deleteMakeup}
              showUpdateModalProps={showUpdateModal}
            />
          ))}
      </div>

      <UpdateMakeupModal
        show={showUpdateModalStatus}
        handleClose={handleCloseUpdate}
        itemInfo={itemInfo}
        itemIndex={index}
        updateMakeups={updateMakeups}
      />
    </div>
  );
}

export default MyFavorites;
