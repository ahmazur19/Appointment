import { useParams } from "react-router-dom"
import useAxiosOnMount from "../hooks/useAxiosOnMount"
import AppointmentsShow from "./AppointmentsShow"
import AxiosContainer from "./AxiosContainer"
import StringifyJson from "./JsonStringify"
import List from "./List"




const Doctor = () => {
    const {id} = useParams()
    const {data, loading, error} = useAxiosOnMount(`/doctors/${id}`)

    // const appointmentTimeStamp = () => {
    //     let date = new Date(data.appointments.created_at);
    //     return <>{data && date.toLocaleDateString("en-US")}</>;
    //   };

      const renderAppointments = () => {
          console.log(data.appointments[0].created_at)
          const appointments = data.appointments
          data.appointments.forEach(a => <AppointmentsShow {...appointments}/>)}
          
              
  
    return(
      <div>
        <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>

           {data && 
           <div>
           <h1>{data.doctor.name}</h1>
           {renderAppointments()}
           {data.appointments.length}
           
           </div>
           }
        <StringifyJson json={data} />

        
        </AxiosContainer>
      
      </div>
    )
  }

export default Doctor