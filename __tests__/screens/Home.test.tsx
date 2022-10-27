import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import { render } from "@testing-library/react-native";

import { HomeScreen } from "../../src/screens/Home";
import { RootTabScreenProps } from "../../types/navigation";

describe("screens / Home.tsx", () => {
  it("should render correctly", () => {
    const navigate: RootTabScreenProps<"Home">["navigation"]["navigate"] =
      jest.fn();
    const options = { navigation: { navigate } } as RootTabScreenProps<"Home">;

    render(<HomeScreen {...options} />);
  });
});
