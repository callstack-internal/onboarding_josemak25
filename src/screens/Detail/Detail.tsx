import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Weather } from "../../component/Weather";

import { makeUseStyles } from "../../helpers/makeUseStyles";

export const DetailScreen = () => {
  const { styles } = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Weather
        disabled
        accessibilityRole="none"
        style={styles.contentContainer}
        accessibilityLabel="weather info"
      />

      <View style={[styles.contentContainer, styles.detailsWrapper]}>
        <Text style={styles.text}>Humidity</Text>
        <Text style={styles.text}>37%</Text>
      </View>
      <View style={[styles.contentContainer, styles.detailsWrapper]}>
        <Text style={styles.text}>Pressure</Text>
        <Text style={styles.text}>101pha</Text>
      </View>
      <View style={[styles.contentContainer, styles.detailsWrapper]}>
        <Text style={styles.text}>Wind speed</Text>
        <Text style={styles.text}>3.36 mph</Text>
      </View>
      <View style={[styles.contentContainer, styles.detailsWrapper]}>
        <Text style={styles.text}>Cloud cover</Text>
        <Text style={styles.text}>0%</Text>
      </View>
    </SafeAreaView>
  );
};

const useStyles = makeUseStyles(({ fonts, layout, isDarkMode, palette }) => ({
  container: {
    flex: 1,
  },
  contentContainer: {
    borderBottomWidth: 0.5,
    opacity: isDarkMode ? 1 : 0.1,
    borderBottomColor: palette.hairlineColor,
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
    // fontWeight: fonts.weight.semi,
  },
}));
