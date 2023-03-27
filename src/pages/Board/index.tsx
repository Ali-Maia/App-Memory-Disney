import React, { useState } from "react";
import { Button } from "../../components/Button";
import Label from "../../components/Label";
import MemoryCard from "../../components/MemoryCard";
import { Modal } from "../../components/Modal";
import { RestartModal } from "../../components/RestartModal";
import * as S from "./style"


export function Board (){
  const [openRestart,setOpenRestart]=useState(false)
  function clickRestart(){
    //Responsavel por abrir o modal de restart
    //Mudar o estado da variavel open
    setOpenRestart(true)
  }
  return(
    <S.Container>
      <Label fontSize={50}>Memória</Label>
      
      <S.ButtonContainer>
          <Button text="Reiniciar" fontSize={16} iconName="iconRestart" onPress={clickRestart}
          />
          <Button iconName="iconNew" text="Novo" fontSize={16} />
        </S.ButtonContainer>
        <MemoryCard princessName="bela" select={true} visible={true} />
        {openRestart && (<RestartModal open={openRestart}/>)}
        <S.ButtonContainer>
          <Button text="Tempo"/>
          <Button text="Movimentos"/>
        </S.ButtonContainer>
        
      </S.Container>
  );
}
