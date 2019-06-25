import { Reducer } from 'redux';
import {
    State,
    SET_VIEW,
    HOME,
} from './Main.types';
import { ActionTypes } from './Main.actions';

export const defaultState: State = {
    view: HOME,
};

const reducer: Reducer<State, ActionTypes> = (state: State = defaultState, {type, payload}: ActionTypes): State => {
    switch (type) {
        case SET_VIEW:
            state = {
                ...state,
                view: payload as string,
            };
            break;
    }
    return state;
};

export default reducer;