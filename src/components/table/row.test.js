import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Row from './row';

const UI = initUI({ Row })();

const wrapper = shallow(<UI.Row/>);

test(`(Component) Row renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

