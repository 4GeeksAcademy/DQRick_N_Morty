import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import locationUrl from "../../img/locationPic.jpeg";
import { Link, useParams } from "react-router-dom";

export const Locations = () => {
  const { store, actions } = useContext(Context);
  const addToFavorite = actions.addToFavorites;
  useEffect(() => {
    actions.getLocation();
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((body) => {
    //     setCharacters(body.results);
    //   });
  }, []);
  return (
    <div className="text-center mt-5">
      <div className="col">
        <h2 className="text-danger">Locations</h2>
        <div className="d-flex flex-nowrap w-100 px-3 item-container">
          {store.location.map((location) => {
            return (
              <div
                key={location.id}
                className="card m-3"
                style={{ minWidth: "18rem" }}
              >
                <img src={locationUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{location.name}</h5>

                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link
                    to={"/locations/details/" + location.id}
                    className="btn btn-outline-primary"
                  >
                    Learn More
                  </Link>
                  <button
                    className="btn btn-outline-warning float-end"
                    onClick={() => {
                      addToFavorite(
                        "/locations/details/" + location.id,
                        location.name
                      );
                    }}
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
