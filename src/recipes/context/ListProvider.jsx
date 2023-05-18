import { useState } from "react";
import ListContext from "./ListContext";

const ListProvider = ({ children }) => {
  const [myFavList, setMyFavList] = useState([]);

  const addFav = (card) => {
    if (!myFavList.some((fav) => fav.id === card.id)) {
      setMyFavList([...myFavList, card]);
    }
  };

  const removeFav = (cardId) => {
    const newFavList = myFavList.filter((card) => card.id !== cardId);
    setMyFavList(newFavList);
  };

  return (
    <ListContext.Provider value={{ myFavList, addFav, removeFav }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
