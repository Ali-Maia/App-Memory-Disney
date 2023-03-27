import { Board } from "./src/pages/Board";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1 }}>
      <Board/>
    </GestureHandlerRootView>
  );
}
