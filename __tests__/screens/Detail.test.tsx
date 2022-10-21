import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import { render, screen } from "@testing-library/react-native";

import { DetailScreen } from "../../src/screens/Detail";

describe("screens / Detail.tsx", () => {
  it("should render correctly", () => {
    render(<DetailScreen />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
