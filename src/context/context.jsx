import { createContext } from "react"
 const MYcontext=createContext({
    value:0,
    setValue:()=>{},
    draweropen:false,
    setdraweropen:()=>{}
})
export default MYcontext;