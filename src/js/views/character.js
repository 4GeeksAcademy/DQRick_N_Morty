import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = (props) => {
  // const [character, setCharacter] = useState({});
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  // let character = store.characters.find((item, index) => index == params.theid);
  // let episode = store.episode.find((item, index) => index == params.theid);
  // let location = store.location.find((item, index) => index == params.theid);
  useEffect(() => {
    actions.getCharacters().then((e) => {
      setCharacter(store.characters.find((item) => item.id == params.theid));
      console.log(character);
      setLoading(true);
    });
  }, [loading]);

  return loading ? (
    <div className="jumbotron">
      <h1 className="display-4"></h1>
      <hr className="my-4" />
      {/* paragraph and image */}

      <div className="row">
        <div className="col-6">
          <img src={character.image}></img>
        </div>
        <div className="col-6">
          <h3>{character.name}</h3>
        </div>
      </div>
      <hr style={{ color: "red" }} />
      {/* info */}
      <div className="row text-danger">
        <div className="col-2">
          <h6>Name</h6>
          <p>{character.name}</p>
        </div>
        <div className="col-2">
          <h6>Gender</h6>
          <p>{character.gender}</p>
        </div>
        <div className="col-2">
          <h6>Species</h6>
          <p>{character.species}</p>
        </div>
        <div className="col-2">
          <h6>Status</h6>
          <p>{character.status}</p>
        </div>
        <div className="col-2">
          <h6>Type</h6>
          <p>{character.type}</p>
        </div>
        <div className="col-2">
          <h6>Location</h6>
          <p>{character.location.name}</p>
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

Character.propTypes = {
  match: PropTypes.object,
};
