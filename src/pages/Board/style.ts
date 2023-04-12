import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  flex:1;
  align-items:center;
  justify-content:flex-start;
`

export const ButtonContainer = styled.View`
  flex-direction:row;
  width: 90%;
  justify-content:space-around;
  margin-top:25px;
`

