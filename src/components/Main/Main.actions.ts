import {
    ActionType,
    createStandardAction,
    PayloadAC,
} from 'typesafe-actions';
import {
    SET_VIEW,
} from './Main.types';

export const setView = createStandardAction(SET_VIEW)<string>();

export const actions = {
    setView,
};

export type ActionTypes = ActionType<typeof actions>;