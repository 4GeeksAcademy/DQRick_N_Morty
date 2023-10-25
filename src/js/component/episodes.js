import React, { useContext, useEffect, useState } from "react";
import locationUrl from "../../img/locationPic.jpeg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Episodes = () => {
  const { store, actions } = useContext(Context);
  const addToFavorite = actions.addToFavorites;

  useEffect(() => {
    actions.getEpisode();
  }, []);

  return (
    <div className="text-center mt-5">
      <div className="col">
        <h2 className="text-danger">Episodes</h2>
        <div className="d-flex flex-nowrap w-100 px-3 item-container">
          {store.episode.map((episode) => {
            return (
              <div
                key={episode.id}
                className="card m-3"
                style={{ minWidth: "18rem" }}
              >
                <img src={locationUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{episode.name}</h5>

                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link
                    to={"/episodes/details/" + episode.id}
                    className="btn btn-outline-primary"
                  >
                    Learn More
                  </Link>
                  <button
                    className="btn btn-outline-warning float-end "
                    onClick={() => {
                      addToFavorite(
                        "/episodes/details/" + episode.id,
                        episode.name
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
