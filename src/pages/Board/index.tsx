import React, { useState } from "react";
import { Button } from "../../components/Button";
import Label from "../../components/Label";
import MemoryCard from "../../components/MemoryCard";
import { Modal } from "../../components/Modal";
import  NewModal  from "../../components/NewModal";
import * as S from "./style"

export function Board (){
  const [openModal,setOpenModal]=useState(false)
  function clickRestart(){
    //Responsavel por atualizar o tempo e zerar as quantidades de movimento
  }
  function clickNew(){
    //Responsável 
    setOpenModal(true)
  }
  return(
    <S.Container>
      <Label fontSize={50}>Memória</Label>
      
      <S.ButtonContainer>
          <Button text="Reiniciar" fontSize={16} iconName="iconRestart" onPress={clickRestart}
          />
          <Button iconName="iconNew" text="Novo" fontSize={16} onPress={()=>clickNew()}
          />
        </S.ButtonContainer>
        <MemoryCard princessName="bela" select={true} visible={true} />
        <NewModal open={openModal} />
        <S.ButtonContainer>
          <Button text="Tempo"/>
          <Button text="Movimentos"/>
        </S.ButtonContainer>
        
      </S.Container>
  );
}
