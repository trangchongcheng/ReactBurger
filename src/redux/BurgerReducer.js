const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: { salad: 10, cheese: 10, beef: 10 },
  total: 30,
};

const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      // Add Food Items
      let burgers = state.burger
      for (const i in burgers) {
        if (action.key === i) {
            burgers[i] += 1;
            state.total += 10;
        }
      }
      state.burger = Object.assign(burgers);
      return {...state};
 
    }

    case "REMOVE_ITEM": {
        for (const i in state.burger) {
            if (action.key === i) {
                state.burger[i] += 1;
                state.total -= 10;
            }
          }
          return { ...state };
    }
  }

  return { ...state };
};
export default BurgerReducer;
