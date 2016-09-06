import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Input from './input';

const UI = initUI({ Input })();

const wrapper = shallow(<UI.Input/>);

test(`(Component) Input renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

