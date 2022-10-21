import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont(); // initialize font icons

import { makeUseStyles } from "../../helpers/makeUseStyles";

type WeatherProps = { data: Weather } & TouchableOpacityProps;

export const Weather: React.FC<WeatherProps> = ({
  data,
  style,
  onPress,
  disabled,
  ...restProps
}) => {
  const { styles, palette } = useStyles();
  const { main, weather, name } = data;
  const [{ description, icon }] = weather;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      testID="weather_card_press"
      accessibilityLabel="weather card"
      style={[styles.cardContainer, style]}
      {...restProps}>
      <View style={styles.cardWrapper}>
        <Image
          style={styles.image}
          resizeMode="contain"
          accessibilityIgnoresInvertColors
          source={{ uri: `https://openweathermap.org/img/wn/${icon}.png` }}
        />
        <View style={styles.cardCityNameWrapper}>
          <Text style={[styles.degreeText, styles.weatherText]}>{name}</Text>
          <Text style={[styles.degreeText, styles.weatherText]}>
            {description}
          </Text>
        </View>
      </View>
      <View style={[styles.cardWrapper, styles.moreContainer]}>
        <View style={styles.degreeWrapper}>
          <Text style={styles.degreeText}>{main.temp} °F</Text>
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
  image: {
    width: 50,
    height: 50,
  },
  degreeWrapper: {
    borderRadius: 50,
    backgroundColor: palette.degree,
    paddingVertical: layout.gutter / 1.5,
    paddingHorizontal: layout.gutter * 1.5,
  },
  moreIcon: {
    opacity: 0.5,
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
