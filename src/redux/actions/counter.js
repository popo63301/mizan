import { INCREASE_BUTTON, REINIT_COUNTERS } from '../constants/counter';

export const increaseCounter = counterId => ({ type: INCREASE_BUTTON, counterId });

export const reinitCounters = (lastDate) => {
  const todayDate = Date.now();
  const firstDate = new Date(lastDate);
  const secondDate = new Date(todayDate);
  const reinit = firstDate.toDateString() !== secondDate.toDateString();

  return { type: REINIT_COUNTERS, todayDate, reinit };
};
