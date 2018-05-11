import { createSelector } from 'reselect';

export const getAllHadiths = state => state.hadiths;

export const getListHadithsIds = createSelector(getAllHadiths, hadiths => Object.keys(hadiths));

export const getHadithById = (state, props) => state.hadiths[props.hadithId];

export const getValidationRateByHadithId = createSelector(
  getHadithById,
  hadith => hadith.validationRate,
);
