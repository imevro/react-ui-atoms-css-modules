import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Group from './group';

const UI = initUI({ Group })();

const wrapper = shallow(<UI.Group/>);

test(`(Component) Group renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

