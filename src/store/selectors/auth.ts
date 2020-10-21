import { createSelector } from "reselect";
import { AppState } from '../typesafeConfig';

const getAuthorized = (state: AppState) => state.authReducer.authorized;
const getRequesting = (state: AppState) => state.authReducer.requesting;
const getSuccessful = (state: AppState) => state.authReducer.successful;
const getMessage = (state: AppState) => state.authReducer.message;

export const getAuthorizedState = createSelector(getAuthorized, (res) => res);
export const getRequestingState = createSelector(getRequesting, (res) => res);
export const getSuccessfulState = createSelector(getSuccessful, (res) => res);
export const getMessageState = createSelector(getMessage, (res) => res);
