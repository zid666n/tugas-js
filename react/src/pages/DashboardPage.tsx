import { Card, Col, Container, Row } from "react-bootstrap";
export default function DashboardPage() {
    return (
        <Container>
            <h3 className="mb-4">Ini Dashboard</h3>
            <Row className="g-4">
                <Col md={4}>
                    <Card className="shadow-sm p-3 border-0">
                        <Card.Subtitle className="text-muted mb-2">All sales</Card.Subtitle>
                        <Card.Title className="fs-3 fw-bold text-success">Rp.50.000.000</Card.Title>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm p-3 border-0">
                        <Card.Subtitle className="text-muted mb-2">All sales</Card.Subtitle>
                        <Card.Title className="fs-3 fw-bold text-success">Rp.50.000.000</Card.Title>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm p-3 border-0">
                        <Card.Subtitle className="text-muted mb-2">All sales</Card.Subtitle>
                        <Card.Title className="fs-3 fw-bold text-success">Rp.50.000.000</Card.Title>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}