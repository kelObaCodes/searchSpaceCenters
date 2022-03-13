import React, { useEffect, useState } from "react";

import algoliasearch from "algoliasearch/lite";
import Autocomplete from "algolia-react-autocomplete";
import { useSelector, useDispatch } from "react-redux";
import {
  getSpecificSpaceStation,
  setHoveredState,
  setPopUpState,
  showNotification,
  hideNotification,
} from "../redux/actions/userActions";
import {
  MenuBar,
  PageHeaderDiv,
  HeaderText,
  MenuBarSearch,
} from "../styled/index";
import Notification from "./Notification";

import "algolia-react-autocomplete/build/css/index.css";

import "mapbox-gl/dist/mapbox-gl.css";

const Mapper = () => {
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

  const dispatch = useDispatch();
  const spaceClicked = useSelector((state) => state.userReducer.spaceCenter);
  const notify = useSelector((state) => state.userReducer.notify);

  const getSpecificSpaceStationInComp = (space) => {
    let spacePicked = space;

    dispatch(setHoveredState(spacePicked));
    dispatch(getSpecificSpaceStation(spacePicked));

    dispatch(setPopUpState(true));
  };
  
  const scrollToElem = () => {
    if (spaceClicked) {
      const violation = window.document.getElementById(spaceClicked.uid);
      if (!violation) {
        dispatch(showNotification());
        setTimeout(() => {
          dispatch(hideNotification());
        }, 3000);
        return;
      }
      violation.scrollIntoView();
    }
  };

  useEffect(() => {
    if (spaceClicked) {
      scrollToElem();
    }
  }, [spaceClicked]);

  return (
    <MenuBar>
      {notify ? <Notification /> : null}

      <PageHeaderDiv>
        <HeaderText>SPACE TRIPS</HeaderText>
      </PageHeaderDiv>
      <MenuBarSearch>
        <Autocomplete
          indexes={indexes}
          onSelectionChange={(selectedSuggestion) =>
            getSpecificSpaceStationInComp(selectedSuggestion)
          }
        >
          <input
            key="input"
            placeholder="Search space center"
            type="search"
            className="aa-input-search"
            autoComplete="off"
          />
        </Autocomplete>
      </MenuBarSearch>
    </MenuBar>
  );
};

export default Mapper;
