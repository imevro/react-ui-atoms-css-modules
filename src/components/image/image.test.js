import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Image from './image';

const UI = initUI({ Image })();

const wrapper = shallow(<UI.Image/>);

test(`(Component) Image renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

