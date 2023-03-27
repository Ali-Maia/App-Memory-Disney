import { PrincessSofia_400Regular, useFonts } from "@expo-google-fonts/princess-sofia";
import React from "react";
import * as S from "./styles";

type LabelProps={
  children: React.ReactNode
  fontSize?: number
}

export default function Label({children,fontSize=16}: LabelProps){
  let [fontsLoaded] = useFonts({
    PrincessSofia_400Regular,
});

if (!fontsLoaded) {
    return null;
}
  return(
    <S.Label
    style={{
      fontFamily: 'PrincessSofia_400Regular',
      fontSize,
      //...styles
    }}>{children}</S.Label>
  )
}