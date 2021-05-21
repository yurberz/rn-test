import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  spinContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  screenContainer: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  authorAvatar: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    width: 40,
    height: 40,
    backgroundColor: "#6FCF97",
    borderRadius: 50,
  },
  authorInfo: {
    marginRight: "auto",
  },
  authorPosts: {
    flexDirection: "row",
  },
  postContainer: {
    marginHorizontal: 2,
    marginBottom: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2,
    shadowColor: "#000",
    elevation: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    height: 40,
    backgroundColor: "#EFEEEE",
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    shadowColor: "#000000",
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
  avatarText: {
    fontFamily: "DMMono-Medium",
    fontSize: 16,
    color: "#382A2C",
  },
  title: {
    fontFamily: "DMMono-Regular",
    fontSize: 15,
    color: "#382A2C",
  },
  text: {
    fontFamily: "DMMono-Regular",
    fontSize: 12,
    color: "#807778",
  },
});

export default styles;
