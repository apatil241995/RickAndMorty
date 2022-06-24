const initialState = {
  favouriteData: []
}

const favouriteReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDFAVORITE':
      state.favouriteData.push(action.payload)
      return state
    case 'REMOVEFAVORITE':
      state.favouriteData.remove(action.payload)
      return state
    default:
      return state
  }

}

export default favouriteReduser