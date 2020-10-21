import { Actions, ISidebarAction} from "../../types.d";

export const toggleSidebar = (): ISidebarAction => {
  return {
    type: Actions.TOGGLE_SIDEBAR
  }
}
