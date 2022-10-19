import React from "react";
import { Navigation } from "./navigation";
import {
  SafeAreaProvider,
  StatusBarProvider,
  QueryClientProvider,
} from "./providers";

// Configure Reactotron in dev environment
if (__DEV__) {
  require("./config/reactotron");
}

export const App: React.FC = () => {
  return (
    <QueryClientProvider>
      <SafeAreaProvider>
        <StatusBarProvider>
          <Navigation />
        </StatusBarProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
