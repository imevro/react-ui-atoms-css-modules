import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Container from './container';

const UI = initUI({ Container })();

const wrapper = shallow(<UI.Container/>);

test(`(Component) Container renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

