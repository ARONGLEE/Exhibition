import React, { useState } from 'react'
import Modal from "../elements/Modal";


const ModalContainer = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const modalClose = () => {
        setModalOpen(!modalOpen)

    }

    return (
        <>
        <button onClick={modalClose}>Click</button>
        { modalOpen && <Modal modalClose={modalClose}></Modal>}
        </>

    )
}

export default ModalContainer
