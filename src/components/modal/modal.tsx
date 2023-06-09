import React from "react";
import Modal from "react-modal";

interface createModalProps {
  titleModal: string;
  children: React.ReactNode;
}

export const CreateModal = ({ titleModal, children }: createModalProps) => {
  return (
    <div>
      <Modal isOpen={() => console.log("open")}>
        <div>
          <h4>{titleModal}</h4>
          <button onClick={() => console.log("close")}>X</button>
        </div>
        <form>{children}</form>
      </Modal>
    </div>
  );
};
