import React from "react";

import { render, fireEvent, screen } from "@testing-library/react-native";
import { Weather } from "../../src/component/Weather";

export const data = {
  coord: {
    lon: -3.7026,
    lat: 40.4165,
  },
  sys: {
    country: "ES",
    timezone: 7200,
    sunrise: 1666247440,
    sunset: 1666286896,
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d",
    },
  ],
  main: {
    temp: 17.9,
    feels_like: 17.44,
    temp_min: 14.51,
    temp_max: 20.81,
    pressure: 1016,
    humidity: 65,
  },
  visibility: 8000,
  wind: {
    speed: 13.89,
    deg: 210,
  },
  clouds: {
    all: 75,
  },
  dt: 1666271369,
  id: 3117735,
  name: "Madrid",
};

describe("components / Weather.tsx", () => {
  it("should render correctly", () => {
    const onNavigationPress = jest.fn();

    render(<Weather data={data} onPress={onNavigationPress} />);

    expect(screen.getByText(data.name)).toBeTruthy();
    fireEvent.press(screen.getByTestId("weather_card_press"));
    expect(onNavigationPress).toHaveBeenCalled();
    expect(onNavigationPress).toHaveBeenCalledTimes(1);
  });
});
