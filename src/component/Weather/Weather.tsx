import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont(); // initialize font icons

import { makeUseStyles } from "../../helpers/makeUseStyles";

type WeatherProps = {
  onPress?: () => void;
} & TouchableOpacityProps;

export const Weather: React.FC<WeatherProps> = ({
  style,
  onPress,
  disabled,
  ...restProps
}) => {
  const { styles, palette } = useStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="weather card"
      style={[styles.cardContainer, style]}
      {...restProps}>
      <View style={styles.cardWrapper}>
        <Text>🌞</Text>
        <View style={styles.cardCityNameWrapper}>
          <Text style={[styles.degreeText, styles.weatherText]}>San Jose</Text>
          <Text style={[styles.degreeText, styles.weatherText]}>Clear</Text>
        </View>
      </View>
      <View style={[styles.cardWrapper, styles.moreContainer]}>
        <View style={styles.degreeWrapper}>
          <Text style={styles.degreeText}>55.62 °F</Text>
        </View>

        {!disabled && (
          <FontAwesome
            size={14}
            name="chevron-right"
            color={palette.text}
            style={styles.moreIcon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const useStyles = makeUseStyles(({ layout, palette, colors, fonts }) => ({
  cardContainer: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: layout.gutter,
  },
  cardWrapper: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  cardCityNameWrapper: {
    marginHorizontal: layout.gutter,
  },
  moreContainer: {
    justifyContent: "flex-end",
  },
  degreeWrapper: {
    borderRadius: 50,
    backgroundColor: palette.degree,
    paddingVertical: layout.gutter / 1.5,
    paddingHorizontal: layout.gutter * 1.5,
  },
  moreIcon: {
    marginLeft: layout.gutter,
  },
  degreeText: {
    fontSize: fonts.size.md,
    color: colors.light.white,
    fontWeight: fonts.weight.semi,
  },
  weatherText: {
    opacity: 0.5,
    color: palette.text,
  },
}));
