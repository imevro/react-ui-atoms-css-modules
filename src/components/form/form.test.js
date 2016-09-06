import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Form from './form';

const UI = initUI({ Form })();

const wrapper = shallow(<UI.Form/>);

test(`(Component) Form renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

