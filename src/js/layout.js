import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Character } from "./views/character";
import { IndividualLocation } from "./views/location";
import { Episode } from "./views/episode";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Context } from "./store/appContext";
import { Link, useParams } from "react-router-dom";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  const { store, actions } = useContext(Context);
  const [favorites, setFavorites] = useState([]);
  const removeFromFavorite = actions.deleteFromFavorites;

  useEffect(() => {
    setFavorites(store.favorites);
    console.log(store);
  });

  return (
    <div className="m-5">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <div className="">
            <div className="dropdown ">
              <button
                className="btn btn-primary dropdown-toggle float-end"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorite
                <span className="badge badge-dark">{favorites.length}</span>
              </button>
              <ul className="dropdown-menu">
                {favorites.length == 0 ? <li>empty</li> : null}
                {favorites.map((item, index) => (
                  <li>
                    <div>
                      <Link className="dropdown-item" to={item.link}>
                        {item.name}
                      </Link>
                      <span>
                        <i
                          className="fas fa-trash-alt align-right"
                          onClick={() => {
                            removeFromFavorite(index);
                          }}
                        ></i>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route
              path="/characters/details/:theid"
              element={<Character category="characters" />}
            />
            <Route
              path="/locations/details/:theid"
              element={<IndividualLocation />}
            />
            <Route path="/episodes/details/:theid" element={<Episode />} />{" "}
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
