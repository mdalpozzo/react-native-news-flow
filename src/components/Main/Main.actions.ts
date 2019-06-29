import {
    ActionType,
    createStandardAction,
    PayloadAC,
} from 'typesafe-actions';
import {
    SET_VIEW,
    Stories,
    GET_NEWS,
} from './Main.types';
import { Dispatch, AnyAction } from 'redux';
import {getNewsAPI} from '../../api/api';
import { resetWarningCache } from 'prop-types';

export const setView = createStandardAction(SET_VIEW)<string>();

export const getNews = () => async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    const newsData =  await getNewsAPI();
    dispatch({
        type: GET_NEWS,
        payload: newsData,
    })
};

export const actions = {
    setView,
    getNews,
};

export type ActionTypes = ActionType<typeof actions | PayloadAC<string, Stories>>;