import React from "react";
import Label from "../Label";
import { Modal } from "../Modal";

type openProps = {
  open: boolean
  onClosed: ()=> void
}

export default function NewModal({open,onClosed}:openProps) {
  return(
    <Modal open={open} onClosed={onClosed}>
      <Label>Teste</Label>
    </Modal>
  )
}