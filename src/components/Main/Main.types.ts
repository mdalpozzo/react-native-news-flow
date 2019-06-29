import { createNamespacedConstFactory } from 'Utils/misc';
export const NAME_SPACE = '@Main';
export const cc = createNamespacedConstFactory(NAME_SPACE);

export interface State {
    view: string;
}

export interface NestedState {
    [NAME_SPACE]: State;
}

// Reducer Cases
export const SET_VIEW = cc('SET_VIEW');

// View Cases
export const HOME = cc('HOME');
export const OTHER = cc('OTHER');
export const TEST = cc('TEST');
