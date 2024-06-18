const initialState = {
    theme: "light",
  };
  
  const B7 = (state = initialState, action:any) => {
    switch (action.type) {
      case "TOGGLE":
        return {
          ...state,
          theme: state.theme === "light" ? "dark" : "light",
        };
      default:
        return state;
    }
  };
  
  export default B7;