import { useEffect, useState } from "react";
import axios from "axios";
import FavItem from "./FavItem";
import UpdateMakeupModal from "./UpdateMakeupModal";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function MyFavorites() {
  const [results, setResults] = useState([]);
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
  const [showItems, setShowItems] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  const [index, setIndex] = useState(0);
  const [showUpdateModalStatus, setShowUpdateModalStatus] = useState(false);
  const { user } = useAuth0();

  useEffect(() => {
    const getFavMakeup = async () => {
      let username = user.email || user.nickname;
      console.log(username);
      let resultMakeup = await axios.get(
        `${serverLink}/product?username=${username}`
      );
      console.log("getFavMakeup", resultMakeup.data);
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
