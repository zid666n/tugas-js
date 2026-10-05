import { Button, Card, Table } from "react-bootstrap";
import ListUser from "../components/organism/ListUser";
import { useState } from "react";
import FormCreateUser from "../components/organism/FormCreateUser";
import useManageUser from "../hooks/useManageUser";

export default function UserPage() {
    const [show, setShow] = useState(false)
    
    const handleToggleShow = () => setShow(prev => !prev)

    const {users, handleChange, handleSubmit} = useManageUser()

    return (
        <>
            <Card className="shadow-sm border-0">
                <Card.Body>
                    <div className="d-flex justify-content-between align-item-center mb-3">
                        <div className="">
                            <h4 className="mb-0 fw-bold">Data User</h4>
                        </div>
                        <Button variant="primary" onClick={handleToggleShow}>
                            Create New User
                        </Button>
                    </div>
                    <Table responsive hover className="align-middle mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((user, key) => (
                                <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>Active</td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            <FormCreateUser
                show={show}
                toggleShow={handleToggleShow}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}   