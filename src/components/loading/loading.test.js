import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Loading from './loading';

const UI = initUI({ Loading })();

const wrapper = shallow(<UI.Loading/>);

test(`(Component) Loading renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

