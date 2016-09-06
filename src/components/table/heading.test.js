import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Heading from './heading';

const UI = initUI({ Heading })();

const wrapper = shallow(<UI.Heading/>);

test(`(Component) Heading renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

