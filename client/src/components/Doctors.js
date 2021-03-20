import List from '../components/List'
import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from './AxiosContainer'
import { Link } from 'react-router-dom'
import Button from './Button'
import axios from 'axios'

const Doctors = () => {
  const {data, loading, error} = useAxiosOnMount('/doctors')

  const deleteDoctor = async(doctor) => {
    try {
      let res = axios.delete(`/doctors/${doctor.id}`)
      
    } catch (error) {
      alert(error)
    }
  }
  
  return(
    <div>
      <Link to='/doctors/new'>
      <Button>New Doctor</Button>
      </Link>
      <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
      <List name='Doctors'
          data={data}
          renderData={(doctor)=> { 
          return(
            <div style={{padding: '5px'}}>
              <Link to={`/doctors/${doctor.id}`}>
            <p>{doctor.name}</p>
              </Link>
              <Button onClick={() => {deleteDoctor(doctor)}}>Delete {doctor.name}</Button>
              <Link to={`/doctors/${doctor.id}/edit`}>
              <Button>Edit Doctor</Button>
              </Link>
            </div>
            )} 
          }
        />

      </AxiosContainer>
    
    </div>
  )
}

export default Doctors