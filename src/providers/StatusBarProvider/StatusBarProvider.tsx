import React, { Fragment, PropsWithChildren } from "react";
import { StatusBar } from "react-native";

import { makeUseStyles } from "../../helpers/makeUseStyles";

export const StatusBarProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { isDarkMode } = useStyles();

  return (
    <Fragment>
      <StatusBar
        animated
        translucent
        barStyle={isDarkMode ? "light-content" : "dark-content"}
      />
      {children}
    </Fragment>
  );
};

const useStyles = makeUseStyles(() => ({}));
