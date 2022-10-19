import React, { useCallback } from "react";
import {
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  ListRenderItem,
} from "react-native";

import { Weather } from "../../component/Weather";
import { makeUseStyles } from "../../helpers/makeUseStyles";
import { RootTabScreenProps } from "../../../types/navigation";

export const HomeScreen: React.FC<RootTabScreenProps<"Home">> = ({
  navigation,
}) => {
  const { styles } = useStyles();

  const handleNavigate = (weather: Weather) => {
    navigation.navigate("Detail", { weather });
  };

  const renderItem: ListRenderItem<Weather> = useCallback(
    ({ item }) => <Weather onPress={() => handleNavigate(item)} />,
    [],
  );

  const ItemSeparatorComponent = () => <View style={styles.separatorStyle} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        data={[...Array(30)]}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </SafeAreaView>
  );
};

const useStyles = makeUseStyles(({ palette, edgeInsets, isDarkMode }) => ({
  container: {
    flex: 1,
    backgroundColor: palette.background,
  },
  contentContainerStyle: {
    paddingBottom: edgeInsets.bottom,
  },
  separatorStyle: {
    borderWidth: 0.5,
    opacity: isDarkMode ? 1 : 0.1,
    backgroundColor: palette.hairlineColor,
  },
}));
