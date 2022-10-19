import React, { FC } from "react";
import { StyleProp, View, Text, ViewStyle } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

Ionicons.loadFont(); // initialize font icons

import { makeUseStyles } from "../../helpers/makeUseStyles";

type EmptyContainerProps = {
  title: string;
  size?: number;
  subtitle?: string;
  style?: StyleProp<ViewStyle>;
};

export const EmptyContainer: FC<EmptyContainerProps> = ({
  title,
  style,
  subtitle,
  size = 38,
}) => {
  const { styles, palette } = useStyles();

  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <Ionicons name="refresh" size={size} color={palette.text} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const useStyles = makeUseStyles(({ palette, layout, fonts }) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: layout.gutter * 2,
  },
  iconContainer: {
    width: 86,
    height: 86,
    borderWidth: 2,
    borderRadius: 43,
    alignItems: "center",
    justifyContent: "center",
    borderColor: palette.text,
  },
  title: {
    textAlign: "center",
    color: palette.text,
    fontSize: fonts.size.lg,
    marginVertical: layout.gutter,
  },
  subtitle: {
    color: palette.text,
    textAlign: "center",
  },
}));
