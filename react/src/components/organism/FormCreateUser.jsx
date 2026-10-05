import { Button, Form } from "react-bootstrap";
import ModalBootstrap from "../molecules/ModalBootstrap";

export default function FormCreateUser({show, toggleShow, handleChange, handleSubmit}) {
    return <ModalBootstrap show={show} handleShow={toggleShow} title="Create New User">
        <Form onSubmit={(e) => {
            handleSubmit(e)

            toggleShow()
        }}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={handleChange} type="text" name="name" placeholder="Enter your name" required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter your email" required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} type="password" name="password" placeholder="Enter your password" required/>
            </Form.Group>
            <div className="mt-5 d-flex justify-content-end gap-2">
                <Button variant="secondary" onClick={toggleShow}>
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </div>
        </Form>
    </ModalBootstrap>
}