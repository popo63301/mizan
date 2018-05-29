import { increaseCounter, reinitCounters } from '../../actions/counter';
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

  it('doesnt reinit Date if the same day', () => {
    const initState = {
      house1: 10,
      tree1: 20,
      tree2: 50,
      hassanats1: 60,
      treasure1: 20,
      quran1: 7,
      quran2: 0,
    };

    const Today = Date.now();
    const action = reinitCounters(Today);
    const what = countersReducer(initState, action);

    expect(what).toEqual({
      house1: 10,
      tree1: 20,
      tree2: 50,
      hassanats1: 60,
      treasure1: 20,
      quran1: 7,
      quran2: 0,
    });
  });

  it(' reinit Date if the same day', () => {
    const initState = {
      house1: 10,
      tree1: 20,
      tree2: 50,
      hassanats1: 60,
      treasure1: 20,
      quran1: 7,
      quran2: 0,
    };

    const LastDate = 1527508995799; // different date
    const action = reinitCounters(LastDate);
    const what = countersReducer(initState, action);

    expect(what).toEqual({
      house1: 0,
      tree1: 0,
      tree2: 0,
      hassanats1: 0,
      treasure1: 0,
      quran1: 0,
      quran2: 0,
    });
  });
});
