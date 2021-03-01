import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../api/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    let auth = axiosWithAuth();
    auth
      .get("/colors")
      .then((res) => {
        console.log(res);
        setColorList(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
