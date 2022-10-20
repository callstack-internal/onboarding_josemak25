import React from "react";
import { Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { Hr } from "../../component/Hr";
import { Weather } from "../../component/Weather";
import { makeUseStyles } from "../../helpers/makeUseStyles";
import { RootStackParamList } from "../../../types/navigation";

export const DetailScreen = () => {
  const { styles } = useStyles();
  const { params } = useRoute<RouteProp<RootStackParamList, "Detail">>();

  const { main, wind, clouds } = params.data;

  return (
    <View style={styles.container}>
      <Weather
        disabled
        data={params.data}
        accessibilityRole="none"
        accessibilityLabel="weather info"
      />
      <Hr />

      <View style={styles.detailsWrapper}>
        <Text style={styles.text}>Humidity</Text>
        <Text style={styles.text}>{main.humidity}%</Text>
      </View>
      <Hr />

      <View style={styles.detailsWrapper}>
        <Text style={styles.text}>Pressure</Text>
        <Text style={styles.text}>{main.pressure} hPa</Text>
      </View>
      <Hr />

      <View style={styles.detailsWrapper}>
        <Text style={styles.text}>Wind speed</Text>
        <Text style={styles.text}>{wind.speed} mph</Text>
      </View>
      <Hr />

      <View style={styles.detailsWrapper}>
        <Text style={styles.text}>Cloud cover</Text>
        <Text style={styles.text}>{clouds.all}%</Text>
      </View>
      <Hr />
    </View>
  );
};

const useStyles = makeUseStyles(({ fonts, layout, palette, edgeInsets }) => ({
  container: {
    flex: 1,
    paddingBottom: edgeInsets.bottom,
  },
  detailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: layout.gutter,
    paddingHorizontal: layout.gutter,
  },
  text: {
    color: palette.text,
    fontSize: fonts.size.md,
  },
}));
