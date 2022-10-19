import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import { Hr } from "../../component/Hr";
import { Weather } from "../../component/Weather";
import { makeUseStyles } from "../../helpers/makeUseStyles";

export const DetailScreen = () => {
  const { styles } = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Weather
        disabled
        accessibilityRole="none"
        accessibilityLabel="weather info"
      />
      <Hr />

      <View style={styles.detailsWrapper}>
        <Text style={styles.text}>Humidity</Text>
        <Text style={styles.text}>37%</Text>
      </View>
      <Hr />

      <View style={styles.detailsWrapper}>
        <Text style={styles.text}>Pressure</Text>
        <Text style={styles.text}>101pha</Text>
      </View>
      <Hr />

      <View style={styles.detailsWrapper}>
        <Text style={styles.text}>Wind speed</Text>
        <Text style={styles.text}>3.36 mph</Text>
      </View>
      <Hr />

      <View style={styles.detailsWrapper}>
        <Text style={styles.text}>Cloud cover</Text>
        <Text style={styles.text}>0%</Text>
      </View>
      <Hr />
    </SafeAreaView>
  );
};

const useStyles = makeUseStyles(({ fonts, layout, palette }) => ({
  container: {
    flex: 1,
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
