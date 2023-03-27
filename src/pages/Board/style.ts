import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? 40 : 0}px;
  border:1px solid red;
  flex:1;
  align-items:center;
  justify-content:flex-start;
`

export const ButtonContainer = styled.View`
  border: 1px solid blue;
  flex-direction:row;
  width: 90%;
  justify-content:space-around;
  margin-top:25px;
`

