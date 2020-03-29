import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdpater from "enzyme-adapter-react-16.1";
import App from "./App";
import { Simulate } from "react-dom/test-utils";

Enzyme.configure({ adapter: new EnzymeAdpater() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to searcg within
 * @param {string} value - Value of data- test attribute for search
 * @returns {ShallowWrapper}
 */
const findTestByAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findTestByAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const incrementBtn = findTestByAttr(wrapper, "increment-component");
  expect(incrementBtn.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const button = findTestByAttr(wrapper, "button-component");
  expect(button.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("clicking button increments counter display", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  //find button and click
  const button = findTestByAttr(wrapper, "button-component");
  button.simulate("click");
  //find display and test value
  const counterDisplay = findTestByAttr(wrapper, "increment-component");
  expect(counterDisplay.text()).toContain(counter + 1 )
});
