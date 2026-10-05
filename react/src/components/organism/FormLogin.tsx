import { Col, Form, Row } from "react-bootstrap";
import CardContainer from "../molecules/CardContainer";
import ButtonPrimary from "../atoms/ButtonPrimary";
import ButtonOutlineSecondary from "../atoms/ButtonOutlineSecondary";
import useLogin from "../../hooks/useLogin";

export default function FormLogin() {
    const {
        loading,
        formState,
        handleCancel,
        handleChange,
        handleSubmit
    } = useLogin()

    return <CardContainer>
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control name="email" onChange={handleChange} type="email" placeholder="Email" value={formState.email}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" value={formState.password}/>
                </Col>
            </Form.Group>
            <div className="mt-5 d-flex justify-content-end gap-2">
                <ButtonOutlineSecondary type="button" onClickHandle={handleCancel}>Cancel</ButtonOutlineSecondary>
                <ButtonPrimary type="submit">
                    {loading ? "Loading..." : "Sign in"}
                </ButtonPrimary>
            </div>
        </Form>
    </CardContainer> 
}