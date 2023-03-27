import React from "react";
import * as S from "./styles";
import { ImageSourcePropType } from "react-native";

import iconNew from "../../Img/GameController.png";
import iconRestart from "../../Img/ArrowClockwise.png"

export enum ICON_ENUM {
  iconNew = "iconNew",
  iconRestart = "iconRestart",
}

 type IconProps={
  iconName : keyof typeof ICON_ENUM;
  size? : number;
}
const ICON_IMAGEM: { [k: string]: ImageSourcePropType } = {
  iconNew,
  iconRestart,
};

export default function Icon ({iconName, size} : IconProps){

  return (
    <S.Icon
      source={ICON_IMAGEM[iconName]}
      style={{
        height: size,
        width: size,
      }}
    />
  );
}
