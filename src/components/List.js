import React, { useEffect, useState } from "react";

import { useGetspaceCenters } from "../hooks/useGetspaceCenters";

import { getSpecificSpaceStation, setHoveredState, setPopUpState} from "../redux/actions/userActions"
import { useSelector, useDispatch } from "react-redux";

import {

  ListSectionSideBar,
  SingleListCover,
  SingleListWhiteBg,
  FlexDiv,
  SpaceName,
  RocketImg,
  Ptag,
  SingleListFlight,
  HfourTag
 
} from "../styled/index";

import "algolia-react-autocomplete/build/css/index.css";

// import { data } from "../mapData";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapper = () => {
    const dispatch = useDispatch();

const spaceClicked = useSelector((state)=> state.userReducer.spaceCenter)
const popUp = useSelector((state)=> state.userReducer.popUp)

  const { error, data, loading } = useGetspaceCenters();



 
  const alightMarker = (e, space) => {
    e.preventDefault();
    let spacePicked = space;
    dispatch(setHoveredState(spacePicked))
    dispatch(setPopUpState(true))
  
  };


  return (
   
        <ListSectionSideBar id="list-side-bar-id">
          {data?.spaceCenters?.nodes.map((space) => {
            return (
              <SingleListCover
                onMouseOver={(e) => alightMarker(e, space)}
                key={space.id}
                id={space.uid}
              >
                <SingleListWhiteBg>
                  <FlexDiv>
                    <SpaceName>{space.name}</SpaceName>
                    <RocketImg
                      height="30"
                      className={
                        spaceClicked?.uid == space.uid ? "bounce-rocket" : ""
                      }
                    />
                  </FlexDiv>

                  <Ptag>{space.description.substring(0, 33)}</Ptag>
                  <Ptag>{space.planet.name}</Ptag>
                </SingleListWhiteBg>
                <SingleListFlight>
                  <HfourTag>SEE ALL FLIGHTS</HfourTag>
                </SingleListFlight>
              </SingleListCover>
            );
          })}
        </ListSectionSideBar>
    
  );
};

export default Mapper;
