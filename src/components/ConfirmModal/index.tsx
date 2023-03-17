import React from 'react';
import {Modal} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {closeModal} from "../../redux/slices/modals";

export default function ConfirmModal() {
    const dispatch = useAppDispatch()

    const modalData = useAppSelector(state => state.modals)

    const modalOpen = modalData.isOpen
    const modalClose = () => dispatch(closeModal())

    const modalAction = () => {
        modalClose()
        dispatch(modalData.action)
    }

    return (
        <>
            {
                modalData.isOpen && <Modal
                    title="Confirmation"
                    open={modalOpen}
                    onCancel={modalClose}
                    onOk={modalAction}
                >
                    <p>Delete this note?</p>
                </Modal>
            }
        </>
    );
}
