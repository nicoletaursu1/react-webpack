import { createSelector } from "reselect";
import { AppState } from '../typesafeConfig';

const getSidebarOpen = (state: AppState) => state.sidebarReducer.isOpen;

export const getSidebarState = createSelector(getSidebarOpen, (res) => res);

