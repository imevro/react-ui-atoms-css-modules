import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import NavBar from './navbar';

const UI = initUI({ NavBar })();

const wrapper = shallow(<UI.NavBar/>);

test(`(Component) NavBar renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

