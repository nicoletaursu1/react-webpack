import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";

const getRequesting = (state: RootStateOrAny) => state.requesing;
const getSuccessful = (state: RootStateOrAny) => state.successful;
const getMessage = (state: RootStateOrAny) => state.message;

export const getRequestingState = createSelector(getRequesting, (res) => res);
export const getSuccessfulState = createSelector(getSuccessful, (res) => res);
export const getMessageState = createSelector(getMessage, (res) => res);


