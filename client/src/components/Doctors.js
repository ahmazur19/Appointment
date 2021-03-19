import List from '../components/List'
import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from './AxiosContainer'
import { Link } from 'react-router-dom'

const Doctors = (props) => {
  const {data, loading, error} = useAxiosOnMount('/doctors')
  
  return(
    <div>
      <AxiosContainer loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
      <List name='Doctors'
          data={data}
          renderData={(doctor)=> { 
          return(
            <div>
              <Link to={'/doctors/:id'}>
            <p>{doctor.name}</p>
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