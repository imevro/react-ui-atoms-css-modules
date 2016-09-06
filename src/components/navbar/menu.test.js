import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Menu from './menu';

const UI = initUI({ Menu })();

const wrapper = shallow(<UI.Menu/>);

test(`(Component) Menu renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

