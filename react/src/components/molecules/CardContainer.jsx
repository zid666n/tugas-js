import { Card } from "react-bootstrap";
import BootstrapContainer from "../atoms/BootstrapContainer";

export default function CardContainer({children}) {
    return <BootstrapContainer>
        <div className="w-50">
            <Card className="shadow">
                <Card.Body className="p-4">
                    <h2 className="font-weight-bold text-center mb-5">Login Form</h2>
                    {children}
                </Card.Body>
            </Card>
        </div>
    </BootstrapContainer>
}