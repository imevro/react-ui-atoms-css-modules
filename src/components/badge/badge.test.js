import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Badge from './badge';

const UI = initUI({ Badge })();

const wrapper = shallow(<UI.Badge/>);

test(`(Component) Badge renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

