import { useState } from "react"
import { useNavigate } from "react-router-dom"

const useLogin = () => {
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const handleChange = (event) => setFormState(prev => ({...prev, [event.target.name]: event.target.value}))
    const handleCancel=  () => {
        setFormState({email: "", password: ""})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setLoading(true)
        setTimeout(() => {
            if (formState.email === "zidan@example.com" && formState.password === "123") navigate("/dashboard")
            else alert("fails")
            
            setLoading(false)
        }, 1000)
        
        
    }

    return {
        formState,
        loading,
        handleCancel,
        handleChange,
        handleSubmit
    }
}

export default useLogin