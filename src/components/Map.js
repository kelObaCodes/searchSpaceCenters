import React, { useEffect, useState } from "react";
import Map, {
  NavigationControl,
  GeolocateControl,
  Marker,
  Popup,
} from "react-map-gl";
import { useGetspaceCenters } from "../hooks/useGetspaceCenters";

import algoliasearch from "algoliasearch/lite";

import { useSelector, useDispatch } from "react-redux";
import {
  getSpecificSpaceStation,
  setHoveredState,
  setPopUpState,
} from "../redux/actions/userActions";
import {
  ListSideBarMap,
  MapBtn,
  ActiveMapIcon,
  InActiveMapIcon,
  SpaceImage,
  HfourTag,
  PopUpDiv,
} from "../styled/index";

// import { data } from "../mapData";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapper = () => {
  const dispatch = useDispatch();
  //   const [spaceClicked, setSpaceClicked] = useState(null);
  const hoveredCard = useSelector((state) => state.userReducer.hoverState);
  const spaceClicked = useSelector((state) => state.userReducer.spaceCenter);
  const popUp = useSelector((state) => state.userReducer.popUp);

  const { error, data, loading } = useGetspaceCenters();

  const [mapViewport, setMapViewPort] = useState({
    width: "100%",
    height: 900,
    latitude: 41.579606918652054,
    longitude: 4.244298260567439,
    zoom: 2.5,
    bearing: 0,
    pitch: 0,
    transitionDuration: 1000,
  });

  const getSpecificSpaceStationInComp = (space) => {
    let spacePicked = space;

    dispatch(setPopUpState(true));
    dispatch(getSpecificSpaceStation(spacePicked));
    dispatch(setHoveredState(""));
  };

  const closePopUp = () => {
    dispatch(setPopUpState(false));
  };

  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_API_KEY
  );
  const indexes = [
    {
      source: searchClient.initIndex("space-centers"),
      displayKey: "name",
      templates: {
        header: () => (
          <h2 className="aa-suggestions-category"> Space Centers</h2>
        ),
        suggestion: (suggestion, isSelected) => (
          <div data-selected={isSelected}> {suggestion.name} </div>
        ),
      },
    },
  ];

  const scrollToElem = () => {
    if (spaceClicked) {
      const violation = window.document.getElementById(spaceClicked.uid);
      const divToScroll = window.document.getElementById("list-side-bar-id");
      if (!violation) {
        return;
      }
      window.innerWidth > 991
        ? (divToScroll.scrollTop = violation.offsetTop - 175)
        : violation.scrollIntoView();
    }
  };

  useEffect(() => {
    if (spaceClicked) {
      scrollToElem();
    }
  }, [data, spaceClicked]);

  return (
    <ListSideBarMap>
      <Map
        initialViewState={mapViewport}
        mapboxAccessToken={process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN}
        style={{ height: window?.innerWidth > 911 ? 1400 : 390 }}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={(viewport) => setMapViewPort(viewport)}
      >
        {data?.spaceCenters?.nodes.map((space) => {
          return (
            <Marker
              key={space.id}
              latitude={space.latitude}
              longitude={space.longitude}
            >
              <MapBtn
                onClick={(e) => {
                  getSpecificSpaceStationInComp(space);
                }}
              >
                {hoveredCard?.uid === space.uid ||
                spaceClicked?.uid === space.uid ? (
                  <ActiveMapIcon height="40" />
                ) : (
                  <InActiveMapIcon />
                )}
              </MapBtn>
            </Marker>
          );
        })}
        {popUp && spaceClicked?.latitude && (
          <Popup
            latitude={spaceClicked?.latitude}
            longitude={spaceClicked?.longitude}
            onClose={() => closePopUp(false)}
            closeOnClick={false}
            closeOnMove={true}
          >
            <PopUpDiv>
              <SpaceImage height="153" />

              <HfourTag>{spaceClicked?.name}</HfourTag>
            </PopUpDiv>
          </Popup>
        )}

        <NavigationControl />
        <GeolocateControl
          showUserHeading={true}
          showCompass={true}
          trackUserLocation={true}
        />
      </Map>
    </ListSideBarMap>
  );
};

export default Mapper;
