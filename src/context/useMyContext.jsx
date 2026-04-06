import { useContext } from "react"
import { MyContext } from "./MyContext"


const useMyContext = ()=>{
  return useContext(MyContext)
}

export default useMyContext