import React from "react";
import {
  Touchable,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import  Icon, { ICON_ENUM }  from "../Icon";
import Label from "../Label";
import * as S from "./styles";


type ButtonProps = {
  iconName?: keyof typeof ICON_ENUM;
  text: string;
  fontSize?: number;
} & TouchableOpacityProps;



export function Button({ iconName, text, fontSize, ...props }: ButtonProps) {

  return (
    <S.Button {...props} >
      {/* {false && (<Icon iconName={iconName} size={fontSize}/>)} */}
      <Label fontSize={fontSize}>{text}</Label>
    </S.Button>
  );
}
