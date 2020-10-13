import { StateType, ActionType } from 'typesafe-actions';

export type Store = StateType<typeof import('./index').default>;
export type AppState = StateType<ReturnType<typeof import('./reducers').default>>;
export type AppAction = ActionType<typeof import('./actions').default>;