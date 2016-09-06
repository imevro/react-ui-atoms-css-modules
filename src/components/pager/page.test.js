import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Page from './page';

const wrapper = shallow(<Page styles={{}} onClick={smth => smth}>{`Hello`}</Page>);

test(`(Component) Page renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

