import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

import { makeUseStyles } from "../../helpers/makeUseStyles";

export const HomeScreen = () => {
  const { styles } = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text>Welcome to the home screen:</Text>
      </View>
    </SafeAreaView>
  );
};

const useStyles = makeUseStyles(() => ({
  container: {
    flex: 1,
  },
}));
