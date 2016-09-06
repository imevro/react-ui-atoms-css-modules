import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Table from './table';

const UI = initUI({ Table })();

const wrapper = shallow(<UI.Table/>);

test(`(Component) Table renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

