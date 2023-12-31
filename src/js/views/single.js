import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  // const [character, setCharacter] = useState({});
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [character, setCharacter] = useState(null);
  const [location, setLocation] = useState(null);
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(false);
  // let character = store.characters.find((item, index) => index == params.theid);
  // let episode = store.episode.find((item, index) => index == params.theid);
  // let location = store.location.find((item, index) => index == params.theid);
  useEffect(() => {
    if (props.category == "characters") {
      actions.getCharacters();
      setCharacter(store.characters.find((item) => item.id == params.theid));
      setLoading(true);
      console.log(character);
    }
    if (props.category == "location") {
      actions.getLocation();
    }
    if (props.category == "episode") {
      actions.getEpisode();
    }
  }, [loading]);
  // // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character/" + params.theid)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((body) => {
  //       setCharacter(body);
  //       console.log(body);
  //     });
  // }, []);
  console.log(store);
  return loading ? (
    <div className="jumbotron">
      <h1 className="display-4"></h1>
      {props.category == "characters"
        ? character.name
        : props.category == "location"
        ? location.name
        : props.category == "episode"
        ? episode.name
        : "loading"}
      <hr className="my-4" />
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  ) : (
    <div>loading</div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
