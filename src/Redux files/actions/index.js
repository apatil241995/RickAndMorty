import axios from 'axios';
export const loadData = () => {
  return {
    type: "LOADDATA"
  }
}

export const getData = (characters) => {
  return {
    type: "GETDATA",
    payload: characters
  }
}

export const addFevourite = (favourite) => {
  return {
    type: "ADDFAVORITE",
    payload: favourite
  }
}

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(loadData)
    axios.get("https://rickandmortyapi.com/api/character")
      .then(response => {
        const characters = response.data.results
        dispatch(getData(characters))
      })
  }
}