import { getCounterValueForHadithId, getCurrentProgress } from './index';

describe('Counters Selectors', () => {
  it('get counter value for Id', () => {
    const initState = {
      counters: {
        house1: 30,
        tree1: 5,
        treasure1: 80,
      },
      other: 'others',
    };

    const props = { other: 'smth', hadithId: 'tree1' };
    const what = getCounterValueForHadithId(initState, props);

    expect(what).toEqual(5);
  });

  it('getCurrentProgress', () => {
    const initState = {
      hadiths: { house1: { validationRate: 3 }, tree1: { validationRate: 7 } },
      counters: {
        house1: 30,
        tree1: 16,
        treasure1: 80,
      },
      other: 'others',
    };

    const props = { other: 'smth', hadithId: 'tree1' };
    const what = getCurrentProgress(initState, props);

    expect(what).toEqual(2);
  });
});
