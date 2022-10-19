import React, { Fragment, useCallback } from "react";
import {
  View,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";

import { Hr } from "../../component/Hr";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
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
    </View>
  );
};

const useStyles = makeUseStyles(({ palette, edgeInsets }) => ({
  container: {
    flex: 1,
    paddingBottom: edgeInsets.bottom,
    backgroundColor: palette.background,
  },
  contentContainerStyle: {
    flex: 1,
    paddingBottom: edgeInsets.bottom,
  },
}));
