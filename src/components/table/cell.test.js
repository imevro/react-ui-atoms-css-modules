import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Cell from './cell';

const UI = initUI({ Cell })();

const wrapper = shallow(<UI.Cell/>);

test(`(Component) Cell renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

