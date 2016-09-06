import React from 'react';
import initUI from '@react-ui/core';
import test from 'ava';
import { shallow } from 'enzyme';
import TextArea from './textarea';

const UI = initUI({ TextArea })();

const wrapper = shallow(<UI.TextArea/>);

test(`(Component) TextArea renders without exploding`, t => {
  t.true(wrapper.length === 1);
});

