import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  BackgroundMask: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: "#FFF",
    maxWidth: windowWidth,
    width: windowWidth,
    height: 180,
    marginHorizontal: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    padding: 10,
  },

  title: {
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
    marginVertical: 5
  },

  message: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginVertical: 5
  },

  containerButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  },


  button: {
    alignItems: "center",
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
    marginHorizontal: 5
  },

  buttonCancel: {
    backgroundColor: "#eb4034"
  },

  buttonConfirm: {
    backgroundColor: '#0042a6'
  },

  textButton: {
    fontSize: 14,
    textAlign: "center",
  },

  textButtonConfirm: {
    color: '#fff'
  },

  textButtonCancel: {
    color: '#fff'
  },


});

export default styles;