import React from "react";

 import bela from "../../Img/bela.png";
 import sininho from "../../Img/sininho.png";
 import cinderela from "../../Img/cinderela.png";
 import branca from "../../Img/branca.png";
 import merida from "../../Img/merida.png";
 import mulan from "../../Img/mulan.png";
 import tiana from "../../Img/tiana.png";
 import adormecida from "../../Img/adormecida.png";
 import sereia from "../../Img/sereia.png";                                  

import * as S from "./styles";
import { ImageSourcePropType } from "react-native";
enum PRINCESS_ENUM {
	adormecida = 'adormecida',
	bela = 'bela',
	branca = 'branca',
	cinderela = 'cinderela',
	merida = 'merida',
	mulan = 'mulan',
	sereia = 'sereia',
	sininho = 'sininho',
	tiana = 'tiana',
}

type MemoryCardProps = {
	princessName: keyof typeof PRINCESS_ENUM
	select: boolean
	visible:boolean
}

const PRINCESS_IMAGE: { [k: string]: ImageSourcePropType } = {
	adormecida,
	bela,
	branca,
	cinderela,
	merida,
	mulan,
	sereia,
	sininho,
	tiana,
}

export default function MemoryCard({ princessName, select, visible }: MemoryCardProps) {
  return (
    <S.Container select={select} visible={visible}>
      <S.Avatar 
      source={PRINCESS_IMAGE[princessName]}
      visible={visible} 
      select={select} 
      />
    </S.Container>
  );
}
