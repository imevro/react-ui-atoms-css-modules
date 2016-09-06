import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Panel from './panel';

const UI = initUI({ Panel })();

const wrapper = shallow(<UI.Panel/>);

test(`(Component) Panel renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

