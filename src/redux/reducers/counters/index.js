import { INCREASE_BUTTON } from '../../constants/counter';

export default function countersReducer(state = {}, action) {
  switch (action.type) {
    case INCREASE_BUTTON:
      return { ...state, [action.counterId]: state[action.counterId] + 1 };
    default:
      return state;
  }
}
