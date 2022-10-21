import { data } from "../../__tests__/components/Weather.test";

export const useNavigation = () => ({
  navigate: () => {},
});

export const useRoute = () => ({
  params: { data: data },
});

export const createNavigatorFactory = () => {
  return jest.requireActual("@react-navigation/native").createNavigatorFactory;
};
