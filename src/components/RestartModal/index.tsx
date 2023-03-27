import React from "react";
import Label from "../Label";
import { Modal } from "../Modal";

type openProps = {
  open: boolean
}

export function RestartModal({open}:openProps) {
  return(
    <Modal open={open}>
      <Label>Teste</Label>
    </Modal>
  )
}