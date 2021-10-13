import React from 'react'
import Work from '../components/Work'
import Image from './Image'
import '../shared/Modal.scss'

const Modal = ({modalClose}, props) => {

    const onCloseModal = (e) => {
        console.log('e.target: ', e.target)
        console.log('e.tarcurrentTargetget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose()
        }

    }
    return (
        <React.Fragment>
            <div className="modal__container" onClick={onCloseModal}>
                <div className="modal">
                    <Image shape= "rectangle" src={props.src}/>
                    <button className="modal__button" onClick={modalClose}> Modal Close</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal;