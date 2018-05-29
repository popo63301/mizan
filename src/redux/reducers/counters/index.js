import { INCREASE_BUTTON, REINIT_COUNTERS } from '../../constants/counter';

export default function countersReducer(state = {}, action) {
  switch (action.type) {
    case INCREASE_BUTTON:
      return { ...state, [action.counterId]: state[action.counterId] + 1 };
    case REINIT_COUNTERS:
      if (action.reinit) {
        return {
          house1: 0,
          tree1: 0,
          tree2: 0,
          hassanats1: 0,
          treasure1: 0,
          quran1: 0,
          quran2: 0,
        };
      }
      return { ...state };
    default:
      return state;
  }
}
