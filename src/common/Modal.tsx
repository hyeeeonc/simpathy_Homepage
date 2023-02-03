import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const ModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: calc(100vh - calc(100vh - 100%));

  background: rgba(255, 255, 255, 0.7);

  z-index: 10;
`

const ModalContentContainer = styled.main`
  width: calc(100% - 100px);
  height: calc(100% - 200px);
  overflow-y: scroll;

  background: #ffffff;
  box-shadow: 0px 50px 150px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`

type ModalProps = {
  children: React.ReactNode
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ children, modalOpen, setModalOpen }: ModalProps) => {
  return (
    <ModalBlock
      style={{
        display: modalOpen ? 'flex' : 'none',
      }}
      onClick={() => {
        setModalOpen(false)
      }}
    >
      <ModalContentContainer>{children}</ModalContentContainer>
    </ModalBlock>
  )
}

export default Modal
