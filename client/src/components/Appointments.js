import { Link } from 'react-router-dom'
import List from '../components/List'
import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from './AxiosContainer'
import CardContainer from './CardContainer'
import StringifyJson from './JsonStringify'

const Appointments = (props) => {
  const {data, loading, error} = useAxiosOnMount('/appointments')
  
  return(
    <div>
      <AxiosContainer loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
      <List name='Appointments'
          data={data}
          renderData={(appointment)=> {
            return(
              <CardContainer>
                <h2>Appointment: {appointment.id}</h2>
                <p>Doctor: {appointment.doctor_id}</p>
                <p>Patient: {appointment.patient_id}</p>
                <p>Time: {appointment.created_at}</p>
              </CardContainer>
            )
          }}
        />
        <StringifyJson data={data} />
        

      </AxiosContainer>
    
    </div>
  )
}

export default Appointments