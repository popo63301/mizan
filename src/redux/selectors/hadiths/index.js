import { createSelector } from 'reselect';

export const getAllHadiths = state => state.hadiths;

export const getListHadiths = createSelector(getAllHadiths, hadiths => Object.keys(hadiths));

export const getHadithById = (state, props) => state.hadiths[props.idHadith];