import { Button } from "react-bootstrap";

export default function ButtonPrimary({type, children}) {
    return <Button type={type} variant="primary">
        {children}
    </Button>
}