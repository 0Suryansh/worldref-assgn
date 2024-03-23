"use client"
import React, { useState } from "react";
import styles from "./Modal.module.css"

interface ModalProps {
    text: string;
}

const Modal: React.FC<ModalProps> = (props) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if ((event.target as HTMLDivElement).id === 'myModal') {
            setShowModal(false);
        }
    };

    return (
        <>
        <button className={styles.modalBtn} onClick={openModal}>Open Modal</button>
            {showModal && (
                <div className={styles.modal} onClick={handleClickOutside}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={closeModal}>&times;</span>
                        <p>{props.text}</p>
                    </div>

                </div>
            )}
        </>
    )
}

export default Modal