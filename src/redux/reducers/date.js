import { REINIT_COUNTERS } from '../constants/counter';

export default function dateReducer(state = 0, action) {
  switch (action.type) {
    case REINIT_COUNTERS:
      if (action.reinit) {
        return action.todayDate;
      }
      return state;
    default:
      return state;
  }
}
