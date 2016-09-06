import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Helper from './helper';

const UI = initUI({ Helper })();

const wrapper = shallow(<UI.Helper/>);

test(`(Component) Helper renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

