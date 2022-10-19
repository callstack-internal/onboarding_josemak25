import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

import { makeUseStyles } from "../../helpers/makeUseStyles";

export const DetailScreen = () => {
  const { styles } = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text>Welcome to the detail screen:</Text>
      </View>
    </SafeAreaView>
  );
};

const useStyles = makeUseStyles(() => ({
  container: {
    flex: 1,
  },
}));
