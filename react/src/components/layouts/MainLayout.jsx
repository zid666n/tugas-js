import { Outlet } from "react-router-dom";
import BootstrapContainer from "../atoms/BootstrapContainer";
import BootstrapNavbar from "../molecules/BootstrapNavbar";
import { Container } from "react-bootstrap";

export default function MainLayout() {
    return (
        <Container className="min-vh=100">
            <BootstrapNavbar/>
            <main className="flex-grow-1 pb-4">
                <Container>
                    <Outlet/>
                </Container>
            </main>
        </Container>
    )
}