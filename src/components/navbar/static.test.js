import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Static from './static';

const UI = initUI({ Static })();

const wrapper = shallow(<UI.Static/>);

test(`(Component) Static renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

