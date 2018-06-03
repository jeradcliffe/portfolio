import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from '../components/CheckboxWithLabel';

// Api documentation
// https://facebook.github.io/jest/docs/en/api.html#beforeeachfn-timeout

beforeEach(() => {
	/* This is where you can set up you tests with commone elements used by all */
});

describe("This is a testing suite. Describes can be nested" , () => {
	test.skip("This test will not run", () =>{
		expect(2 + 2).toBe(4);
	});

	test('CheckboxWithLabel changes the text after click', () => {
	  // Render a checkbox with label in the document
	  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

	  expect(checkbox.text()).toEqual('Off');

	  checkbox.find('input').simulate('change');

	  expect(checkbox.text()).toEqual('On');
	});
});


