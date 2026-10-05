import { Button } from "react-bootstrap";

export default function ButtonOutlineSecondary({type, children, onClickHandle = () => {}}) {
    return <Button variant="outline-secondary" type={type} onClick={onClickHandle}>{children}</Button>
}