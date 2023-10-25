import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  //const [characters, setCharacters] = useState([]);
  const addToFavorite = actions.addToFavorites;
  useEffect(() => {
    actions.getCharacters();
  }, []);
  return (
    <div className="text-center mt-5">
      <div className="col">
        <h2 className="text-danger">Characters</h2>
        <div className="d-flex flex-nowrap w-100 px-3 item-container">
          {store.characters.map((character, index) => {
            return (
              <div
                key={character.id}
                className="card m-3"
                style={{ minWidth: "18rem" }}
              >
                <img src={character.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>

                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link
                    to={"/characters/details/" + character.id}
                    className="btn btn-outline-primary"
                  >
                    Learn More
                  </Link>
                  <button
                    className="btn btn-outline-warning float-end"
                    onClick={() => {
                      addToFavorite(
                        "/characters/details/" + character.id,
                        character.name
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
