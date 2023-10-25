import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import locationUrl from "../../img/locationPic.jpeg";

export const IndividualLocation = (props) => {
  // const [character, setCharacter] = useState({});
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [individualLocation, setIndividualLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  // let location = store.location.find((item, index) => index == params.theid);
  useEffect(() => {
    actions.getLocation().then((e) => {
      setIndividualLocation(
        store.location.find((item, index) => item.id == params.theid)
      );
      setLoading(true);
      console.log(individualLocation);
    });
  }, [loading]);

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
          <h3>{individualLocation.name}</h3>
        </div>
      </div>
      <hr style={{ color: "red" }} />
      {/* info */}
      <div className="row text-danger">
        <div className="col-2">
          <h6>Name</h6>
          <p>{individualLocation.name}</p>
        </div>
        <div className="col-2">
          <h6>Created</h6>
          <p>{individualLocation.created}</p>
        </div>
        <div className="col-2">
          <h6>Dimension</h6>
          <p>{individualLocation.dimension}</p>
        </div>
        <div className="col-2">
          <h6>Residents</h6>
          <p>{individualLocation.residents.length}</p>
        </div>
        <div className="col-2">
          <h6>Type</h6>
          <p>{individualLocation.type}</p>
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

IndividualLocation.propTypes = {
  match: PropTypes.object,
};
