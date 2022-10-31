import React, { Fragment, useCallback } from "react";
import {
  View,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont(); // initialize font icons

import { Hr } from "../../component/Hr";
import { Toaster } from "../../helpers/toast";
import { Weather } from "../../component/Weather";
import { useWeather } from "../../hooks/useWeather";
import { makeUseStyles } from "../../helpers/makeUseStyles";
import { RootTabScreenProps } from "../../../types/navigation";
import { ErrorContainer } from "../../component/ErrorContainer";
import { EmptyContainer } from "../../component/EmptyContainer";

export const HomeScreen: React.FC<RootTabScreenProps<"Home">> = ({
  navigation,
}) => {
  const { styles, palette } = useStyles();
  const { data, isRefetching, error, status, refetch } = useWeather();

  const renderItem: ListRenderItem<Weather> = useCallback(
    ({ item }) => (
      <Weather
        data={item}
        onPress={() => navigation.navigate("Detail", { data: item })}
      />
    ),
    [navigation],
  );

  const ListEmptyComponent = () => {
    return (
      <Fragment>
        {status === "error" && (
          <ErrorContainer message={error.message} onRetry={refetch} />
        )}

        {status === "loading" && <ActivityIndicator color={palette.text} />}

        {status !== "loading" && status !== "error" && (
          <EmptyContainer title="No Weather Data" subtitle="Pull-to-refresh" />
        )}
      </Fragment>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        onRefresh={refetch}
        renderItem={renderItem}
        refreshing={isRefetching}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Hr />}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="toaster"
        style={styles.toastButtonStyle}
        onPress={() => Toaster.show("Hello world")}>
        <FontAwesome
          size={30}
          style={styles.icon}
          color={palette.text}
          name="stack-overflow"
        />
      </TouchableOpacity>
    </View>
  );
};

const useStyles = makeUseStyles(({ palette, edgeInsets, layout }) => ({
  container: {
    flex: 1,
    paddingBottom: edgeInsets.bottom,
    backgroundColor: palette.background,
  },
  contentContainerStyle: {
    flex: 1,
    paddingBottom: edgeInsets.bottom,
  },
  toastButtonStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    right: layout.gutter,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: layout.gutter + edgeInsets.bottom,
    backgroundColor: palette.shadedBackground,
  },
  icon: {
    opacity: 0.5,
  },
}));
