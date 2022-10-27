import React, { FC } from "react";
import {
  View,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";

import { makeUseStyles } from "../../helpers/makeUseStyles";

type ErrorContainerProps = {
  message: string;
  onRetry: () => void;
  messageStyle?: TextStyle;
  retryTextStyle?: TextStyle;
  retryButtonContainerStyle?: ViewStyle;
};

export const ErrorContainer: FC<ErrorContainerProps> = ({
  message,
  onRetry,
  messageStyle,
  retryTextStyle,
  retryButtonContainerStyle,
}) => {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      <Text style={[styles.message, messageStyle]}>{message}</Text>
      <TouchableOpacity
        onPress={onRetry}
        testID="retry_network_call"
        accessibilityRole="button"
        accessibilityLabel="retry fetching weather"
        style={[styles.retryButtonContainer, retryButtonContainerStyle]}>
        <Text style={[styles.retryText, retryTextStyle]}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const useStyles = makeUseStyles(({ palette, layout, fonts }) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    fontSize: fonts.size.md,
    marginVertical: layout.gutter,
    marginHorizontal: layout.gutter * 2,
  },
  retryButtonContainer: {
    height: 30,
  },
  retryText: {
    color: palette.text,
    fontFamily: fonts.variants.bold,
  },
}));
