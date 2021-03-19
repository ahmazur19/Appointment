import { useParams } from "react-router-dom"
import useAxiosOnMount from "../hooks/useAxiosOnMount"
import AxiosContainer from "./AxiosContainer"
import StringifyJson from "./JsonStringify"

const Patient = () => {
    const {id} = useParams()
    const {data, loading, error} = useAxiosOnMount(`/patients/${id}`)
   
  
    return(
      <div>
        <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <StringifyJson json={data} />
  
        </AxiosContainer>
      
      </div>
    )
  }

export default Patient