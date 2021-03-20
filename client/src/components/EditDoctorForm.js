import axios from "axios"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Form, Input } from "semantic-ui-react"
import Button from "./Button"

const EditDoctorForm = () =>{
    const [name, setName] = useState('')
    const history = useHistory()
    const {id} = useParams()

    const handleSubmit = async(e) => {
        
        try {
            let res = axios.patch(`/doctors/${id}`, {name: name})
            history.push('/doctor')

            
        } catch (error) {
            alert(error)
            
        }
    }
    return(
        <div>
            <h1>Edit Doctor</h1>
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

export default EditDoctorForm