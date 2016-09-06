import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Brand from './brand';

const UI = initUI({ Brand })();

const wrapper = shallow(<UI.Brand/>);

test(`(Component) Brand renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

