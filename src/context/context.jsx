import { createContext } from "react"
 const MYcontext=createContext({
    value:0,
    setValue:()=>{},
    draweropen:false,
    mod:"",
    setdraweropen:()=>{},
    handleTheme:()=>{},
    handleChange:()=>{},
    handlechangetoggle:()=>{},
})
export default MYcontext;