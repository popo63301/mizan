import { increaseCounter } from '../../actions/counter';
import countersReducer from './index';

describe('Counter Reducer', () => {
  it('increase the corresponding counter', () => {
    const initState = {
      tree1: 12,
      treasure1: 3,
      quran1: 2,
    };
    const action = increaseCounter('treasure1');
    const what = countersReducer(initState, action);
    expect(what).toEqual({
      tree1: 12,
      treasure1: 4,
      quran1: 2,
    });
  });
});
