import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Pager from './';

const UI = initUI({ Pager })();

const wrapper = shallow(<UI.Pager/>);

test(`(Component) Pager renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

