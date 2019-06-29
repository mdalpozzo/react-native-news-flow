import {
    NAME_SPACE,
    NestedState,
} from './Main.types';

export const selectView = (state: NestedState): string => state[NAME_SPACE].view;