import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Link from './link';

const UI = initUI({ Link })();

const wrapper = shallow(<UI.Link/>);

test(`(Component) Link renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

