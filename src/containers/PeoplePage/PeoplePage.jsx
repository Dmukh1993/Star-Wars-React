import React from "react";
import { PropTypes } from "prop-types";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import PeopleList from "./PeopleList/PeopleList";
import { useState, useEffect } from "react";
import { getApiResource } from "@utils/Network";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import { API_PEOPLE } from "@constans/api";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      <h1 className="header_text">Navigation</h1>
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);

// https://starwars-visualguide.com/assets/img/characters/https:swapi.devapipeople1.jpg
