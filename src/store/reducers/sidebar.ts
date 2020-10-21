import { Actions, ISidebarAction, ISidebarState } from "../../types.d";

const initialState: ISidebarState = {
  isOpen: true,
};

const sidebarReducer = (state = initialState, action: ISidebarAction) => {

  switch (action.type) {
    case Actions.TOGGLE_SIDEBAR:
      const stateIsOpen = state.isOpen;
      return {
        ...state,
        isOpen: !stateIsOpen,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
