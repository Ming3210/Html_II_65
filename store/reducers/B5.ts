const initial:any = []

const B5 = (state = initial, action:any) => {
  switch (action.type) {
    case "GENERATE":
      return Math.floor(Math.random() * 100000);
    default:
      return state;
  }
};

export default B5;