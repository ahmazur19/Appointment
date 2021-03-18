import List from '../components/List'
import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from './AxiosContainer'

const Patients = (props) => {
  const {data, loading, error} = useAxiosOnMount('/patients/')
  
  return(
    <div>
      <AxiosContainer>
      <List name='Patients'
          data={data}
          renderData={(patient)=> { 
          return(
            <div>
            <p>{patient.name}</p>
            </div>
            )} 
          }
        />

      </AxiosContainer>
    <h1>Patients</h1>
    </div>
  )
}

export default Patients