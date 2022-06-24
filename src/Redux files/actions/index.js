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

export const addFevourite = payload => {
  return {
    type: "ADDFAVORITE",
    payload: payload
  }
}

export const removeFevourite = payload => {
  return {
    type: "REMOVEFAVORITE",
    payload: payload
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