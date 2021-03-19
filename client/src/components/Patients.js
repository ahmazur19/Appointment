import List from '../components/List'
import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from './AxiosContainer'

const Patients = (props) => {
  const {data, loading, error} = useAxiosOnMount('/patients')
  
  return(
    <div>
      <AxiosContainer loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
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
    
    </div>
  )
}

export default Patients