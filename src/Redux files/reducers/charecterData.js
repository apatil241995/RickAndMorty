const initialState = {
  loading: false,
  character: []
}

const characterReduser = (state = initialState, action) => {
  switch (action.type) {
    case "LOADDATA":
      return {
        ...state,
        loading: true
      }
    case "GETDATA":
      return {
        loading: false,
        character: action.payload
      }
    default:
      return state
  }

}

export default characterReduser