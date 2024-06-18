const initial:any = "Rikei Academy"

const B5 = (state = initial, action:any) => {
  switch (action.type) {
    case "CHANGE":
      return "RikkeiSoft"
    default:
      return state;
  }
};

export default B5;