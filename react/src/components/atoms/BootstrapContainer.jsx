import { Container } from "react-bootstrap";

export default function BootstrapContainer({children}) {
    return <Container className="d-flex align-items-center justify-content-center min-vh-100 ">
        {children}
    </Container>
}