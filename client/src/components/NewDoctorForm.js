import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Form, Input } from "semantic-ui-react"
import Button from "./Button"

const NewDoctorForm = () =>{
    const [name, setName] = useState('')
    const history = useHistory()

    const handleSubmit = async(e) => {
        
        try {
            let res = axios.post('/doctors/', {name: name})
            history.push('/doctor')

            
        } catch (error) {
            alert(error)
            
        }
    }
    return(
        <div>
            <h1>New Doctor Form</h1>
            <Form >
                <p>Doctor Name</p>
                <Input 
                value={name}
                onChange={(e)=> setName(e.target.value)}/>
                <Button type='submit' onClick={handleSubmit}>Add Doctor</Button>
            </Form>
        </div>
    )
}

export default NewDoctorForm  