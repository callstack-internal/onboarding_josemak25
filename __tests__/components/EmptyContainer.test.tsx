import React from "react";

import { render, screen } from "@testing-library/react-native";
import { EmptyContainer } from "../../src/component/EmptyContainer";

describe("components / EmptyContainer.tsx", () => {
  const options = { title: "No Weather Data", subtitle: "Pull-to-refresh" };

  it("should render correctly", () => {
    render(<EmptyContainer {...options} />);

    expect(screen.getByText(options.title)).toBeTruthy();
    expect(screen.getByText(options.subtitle)).toBeTruthy();
  });
});
