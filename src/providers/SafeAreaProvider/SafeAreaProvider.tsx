import React, { PropsWithChildren } from "react";

import { SafeAreaProvider as BaseSafeAreaProvider } from "react-native-safe-area-context";

export const SafeAreaProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <BaseSafeAreaProvider>{children}</BaseSafeAreaProvider>
);
