import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Col from './col';

const UI = initUI({ Col })();

const wrapper = shallow(<UI.Col/>);

test(`(Component) Col renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

