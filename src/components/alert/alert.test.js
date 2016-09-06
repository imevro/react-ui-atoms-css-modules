import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import Alert from './alert';

const UI = initUI({ Alert })();

const wrapper = shallow(<UI.Alert/>);

test(`(Component) Alert renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

