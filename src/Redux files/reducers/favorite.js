const favouriteReduser = (state = [], action) => {
  switch (action.type) {
    case 'ADDFAVORITE':
      state.push(action.payload)
      return state
    default:
      return state
  }

}

export default favouriteReduser