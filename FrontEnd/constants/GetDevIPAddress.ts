import Constants from "expo-constants";

const { expoGoConfig } = Constants;

const uri = `http://${expoGoConfig?.debuggerHost?.split(":").shift()}`;

export default uri;
