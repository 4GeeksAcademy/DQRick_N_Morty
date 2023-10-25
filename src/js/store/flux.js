const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      characters: [],
      location: [],
      episode: [],
    },
    actions: {
      addToFavorites: (favoriteLink, favoriteName) => {
        let temp = {
          link: favoriteLink,
          name: favoriteName,
        };
        setStore({
          favorites: [...getStore().favorites, temp],
        });
      },
      deleteFromFavorites: (unFavorite) => {
        setStore({
          favorites: getStore().favorites.filter(
            (t, currentIndex) => unFavorite != currentIndex
          ),
        });
      },
      getCharacters: async () => {
        console.log(getStore());
        await fetch("https://rickandmortyapi.com/api/character")
          .then((response) => {
            return response.json();
          })
          .then((body) => {
            //   setCharacters(body.results);
            setStore({
              characters: body.results,
              favorites: getStore().favorites,
            });
          });
      },
      getLocation: async () => {
        await fetch("https://rickandmortyapi.com/api/location")
          .then((response) => {
            return response.json();
          })
          .then((body) => {
            //   setCharacters(body.results);
            setStore({
              location: body.results,
              favorites: getStore().favorites,
            });
          });
      },
      getEpisode: async () => {
        await fetch("https://rickandmortyapi.com/api/episode")
          .then((response) => {
            return response.json();
          })
          .then((body) => {
            //   setCharacters(body.results);
            setStore({
              episode: body.results,
              favorites: getStore().favorites,
            });
          });
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
