import { Board } from "./src/pages/Board";
// import { getStatusBarHeight } from 'react-native-status-bar-height';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
export default function App() {
  // const statusBarHeight = getStatusBarHeight();
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <StatusBar style="auto"/>
      <Board />
    </GestureHandlerRootView>
  );
}
