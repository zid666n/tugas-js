import { Button, Modal } from "react-bootstrap";

export default function ModalBootstrap({handleShow, show, title, children}) {
    return (
        <>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    )
}