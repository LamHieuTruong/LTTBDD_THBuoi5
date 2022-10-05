import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
  const List = ({ a }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingTop: 10,
          borderBottomWidth: 1,
          borderTopWidth: 3,
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: a.image,
          }}
        />
        <View style={{ paddingLeft: 20, flex: 2 }}>
          <Text>{a.name}</Text>
          <Text style={{ paddingTop: 30 }}>{a.shop}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.buttonChat}
            onPress={() => {
              alert("you clicked me");
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Chat
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.2 }} />
      </View>
    );
  };
  const styles = StyleSheet.create({
    buttonChat: {
      backgroundColor: "red",
      width: 100,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    tinyLogo: {
      width: 70,
      resizeMode: "contain",
      height: 100,
    },
  });
  export default List;
  