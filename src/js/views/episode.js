import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import locationUrl from "../../img/locationPic.jpeg";

export const Episode = (props) => {
  // const [character, setCharacter] = useState({});
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(false);
  // let character = store.characters.find((item, index) => index == params.theid);
  // let episode = store.episode.find((item, index) => index == params.theid);
  // let location = store.location.find((item, index) => index == params.theid);
  useEffect(() => {
    actions.getEpisode().then((e) => {
      setEpisode(store.episode.find((item) => item.id == params.theid));
      setLoading(true);
      console.log(episode);
    });
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
      <hr className="my-4" />
      <div className="row">
        <div className="col-6">
          <img style={{ width: "100%" }} src={locationUrl}></img>
        </div>
        <div className="col-6">
          <h3>{episode.name}</h3>
        </div>
      </div>
      <hr style={{ color: "red" }} />
      {/* info */}
      <div className="row text-danger">
        <div className="col-2">
          <h6>Air Date</h6>
          <p>{episode.air_date}</p>
        </div>
        <div className="col-2">
          <h6>Characters</h6>
          <p>{episode.characters.length}</p>
        </div>
        <div className="col-2">
          <h6>Created</h6>
          <p>{episode.created}</p>
        </div>
        <div className="col-2">
          <h6>Episode</h6>
          <p>{episode.episode}</p>
        </div>
        <div className="col-2">
          <h6>Name</h6>
          <p>{episode.name}</p>
        </div>
      </div>

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

Episode.propTypes = {
  match: PropTypes.object,
};
