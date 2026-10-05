import { Button, Card } from "react-bootstrap";

export default function ListUser() {
    return (
        <>
            <Card className="shadow-sm border-0">
                <Card.Body>
                    <div className="d-flex justify-content-between align-item-center mb-3">
                        <h4 className="mb-0 fw-bold">Data User</h4>
                    </div>
                    <Button variant="primary">
                        Create New User
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}