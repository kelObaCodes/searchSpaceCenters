import React, { useEffect } from "react";

import {
  ParentDiv,
  ListSection,

} from "../styled/index";

import ListComponent from "../components/List"
import SearchComponent from "../components/Search"
import MapComponent from "../components/Map"

// import { data } from "../mapData";
import "mapbox-gl/dist/mapbox-gl.css";

const AppContainer = () => {

 

  useEffect(() => {
    
  }, []);

  return (
    <ParentDiv>
  <SearchComponent/>

      <ListSection>
        <ListComponent/>
        <MapComponent/>
      </ListSection>
    </ParentDiv>
  );
};

export default AppContainer;
