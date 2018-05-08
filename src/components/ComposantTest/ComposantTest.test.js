import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ComposantTest from './ComposantTest';

Enzyme.configure({ adapter: new Adapter() });

describe('test composant', () => {
  it('test basique', () => {
    // const wrapper = shallow(<ComposantTest name="soso" />);
    // console.log(wrapper
    //   .find('man')
    //   .childAt(0)
    //   .type(),
    //   // .debug()
    // );
    // console.log('ComposantTest', ComposantTest);
    // console.log('hello');
  });
});
