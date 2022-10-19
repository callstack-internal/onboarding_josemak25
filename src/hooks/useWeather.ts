import { useQuery } from "@tanstack/react-query";

import { network } from "../config/api";
import { CITIES_LIST } from "../constants/cities";

type WeatherQueryResponse = { cnt: number; list: Weather[] };

const getQueryKey = () => [`Weathers`];

const QUERY_PARAMS = new URLSearchParams({
  units: "metric",
  id: CITIES_LIST.join(","),
  APPID: "db4bed4d59d20f4e3dd72b920c8f905c",
});

const getWeather = () => {
  return network.get<WeatherQueryResponse>(`/data/2.5/group?${QUERY_PARAMS}`);
};

export const useWeather = () =>
  useQuery<
    Awaited<ReturnType<typeof getWeather>>,
    BasicError,
    Weather[] | undefined
  >(getQueryKey(), getWeather, {
    select: ({ data }) => data?.list, // select just the array of weather
  });
