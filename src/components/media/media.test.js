import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Media from './media';

const UI = initUI({ Media })();

const wrapper = shallow(<UI.Media/>);

test(`(Component) Media renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

