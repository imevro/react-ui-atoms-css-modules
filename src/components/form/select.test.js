import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Select from './select';

const UI = initUI({ Select })();

const wrapper = shallow(<UI.Select options={[
  { value: `one`, label: `one` },
  { value: `two`, label: `two` },
]}/>);

test(`(Component) Select renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

