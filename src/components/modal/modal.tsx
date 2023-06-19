import React from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";

interface createModalProps {
  titleModal: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const ModalM = ({
  titleModal,
  children,
  isOpen,
  setIsOpen,
  className,
}: createModalProps) => {
  return (
    <Modal
      className={`w-[32rem] max-w-[100vw] bg-whiteFixed m-auto mt-24 gap-6 p-6 pb-10 rounded-lg flex flex-col outline-none max-h-[80vh] overflow-y-scroll ${className}`}
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div className="flex justify-between -mt-2">
        <h4 className="font-semibold">{titleModal}</h4>
        <button onClick={() => setIsOpen(false)}>
          <IoMdClose color="#ccc" size={24} />
        </button>
      </div>
      {children}
    </Modal>
  );
};
