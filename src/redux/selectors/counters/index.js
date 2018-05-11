import { createSelector } from 'reselect';
import { getValidationRateByHadithId } from '../hadiths';

export const getCounterValueForHadithId = (state, ownProps) => state.counters[ownProps.hadithId];

export const getCurrentProgress = createSelector(
  getCounterValueForHadithId,
  getValidationRateByHadithId,
  (counterValue, validationRate) => counterValue % validationRate,
);
