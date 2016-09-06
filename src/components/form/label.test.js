import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Label from './label';

const UI = initUI({ Label })();

const wrapper = shallow(<UI.Label/>);

test(`(Component) Label renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

