import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Button from './button';

const UI = initUI({ Button })();

const wrapper = shallow(<UI.Button/>);

test(`(Component) Button renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

