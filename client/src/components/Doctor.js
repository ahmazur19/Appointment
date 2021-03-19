import { useParams } from "react-router-dom"
import useAxiosOnMount from "../hooks/useAxiosOnMount"
import AxiosContainer from "./AxiosContainer"
import StringifyJson from "./JsonStringify"
import List from "./List"

const Doctor = () => {
    const {id} = useParams()
    const {data, loading, error} = useAxiosOnMount(`/doctors/${id}`)
   
  
    return(
      <div>
        <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <StringifyJson json={data} />
  
        </AxiosContainer>
      
      </div>
    )
  }

export default Doctor