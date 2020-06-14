import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ReactModal from 'react-modal';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  // const { title, colors } = useContext(ThemeContext);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      closeTimeoutMS={200}
      style={{
        content: {
          top: '0',
          right: '0',
          left: 'auto',
          bottom: '0',
          background: '#312e38',
          boxShadow: '0 0 4px 1px #222',
          color: 'white',
          height: '100%',
          border: 'none',
          paddingTop: '10',
          paddingBottom: '10',
          paddingLeft: '0',
          paddingRight: '0',
        },
        overlay: {
          backgroundColor: '#121214e6',
          zIndex: 4,
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
