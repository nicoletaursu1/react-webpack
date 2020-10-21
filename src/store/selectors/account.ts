import { createSelector } from "reselect";
import { AppState } from '../typesafeConfig';

const getAccount = (state: AppState) => state.accountReducer;

export const getAccountState = createSelector(getAccount, (res) => res);
