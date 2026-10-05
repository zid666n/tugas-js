import { useState } from "react"

const listUsers = [
    {
        id: Date.now(),
        name: "Reza",
        email: "ibrahim@example.com",
        password: 12345,
        status: "active"
    },
    {
        id: Date.now(),
        name: "Budi",
        email: "budi@example.com",
        password: 12345,
        status: "active"
    },
    {
        id: Date.now(),
        name: "Ani",
        email: "ani@example.com",
        password: 12345,
        status: "active"
    }
]

const useManageUser = () => {
    const [users, setUsers] = useState(listUsers)
    const [formState, setFormState] = useState({
        id: Date.now(),
        name: "",
        email: "",
        status: "active",
        password: ""
    })

    const handleChange = (e) => setFormState(prev => ({...prev, [e.target.name]: e.target.value}))

    const handleSubmit = (e) => {
        e.preventDefault()

        setUsers(prev => [...prev, {
            id: formState.id,
            name: formState.name,
            email: formState.email,
            password: formState.password,
            status: formState.status
        }])
    }

    return {
        users,
        handleChange,
        handleSubmit
    }
}

export default useManageUser