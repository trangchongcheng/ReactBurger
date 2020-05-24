const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: { salad: 10, cheese: 20, beef: 55 },
  total: 85,
};

const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      // Add Food Items
      let burgers = state.burger;
      let menu = state.menu;
      for (const i in burgers) {
        if (action.key === i) {
          burgers[i] += 1;
          state.total += menu[i];
        }
      }
      state.burger = { ...burgers };
      return { ...state };
    }

    case "REMOVE_ITEM": {
      let burgers = state.burger;
      let menu = state.menu;
      for (const i in burgers) {
        if (action.key === i) {
          if(burgers[i]>0){
            burgers[i] -= 1;
            state.total -= menu[i];
          }
        
        }
      }
      state.burger = { ...burgers };
      return { ...state };
    }
  }

  return { ...state };
};
export default BurgerReducer;
