/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import { render } from "@testing-library/react-native";

import { App } from "../src";

it("renders correctly", () => {
  render(<App />);
});
