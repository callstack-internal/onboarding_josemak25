import React from "react";

import { render, fireEvent, screen } from "@testing-library/react-native";
import { ErrorContainer } from "../../src/component/ErrorContainer";

describe("components / ErrorContainer.tsx", () => {
  it("should render correctly", () => {
    const error = "Check your internet";
    const onRetryPress = jest.fn();

    render(<ErrorContainer message={error} onRetry={onRetryPress} />);

    expect(screen.getByText(error)).toBeTruthy();
    expect(screen.getByTestId("retry_network_call")).toBeTruthy();
    fireEvent.press(screen.getByTestId("retry_network_call"));
    expect(onRetryPress).toHaveBeenCalled();
    expect(onRetryPress).toHaveBeenCalledTimes(1);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
