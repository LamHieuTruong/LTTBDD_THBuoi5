import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import item from "./Item";
import List from "./List";

function App () {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={styles.text1}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={item}
          renderItem={(data) => <List a={data.item} />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text1: {
    height: 60,
    borderBottomWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  container: {
    flex: 1,
  },
});

export default App;