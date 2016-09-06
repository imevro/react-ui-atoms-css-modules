import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import BtnGroup from './btngroup';

const UI = initUI({ BtnGroup })();

const wrapper = shallow(<UI.BtnGroup/>);

test(`(Component) BtnGroup renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

