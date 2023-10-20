import { createContext } from "react"
 const MYcontext=createContext({
    value:0,
    mod:"",
    setValue:()=>{},
    draweropen:false,
    setdraweropen:()=>{},
    handleTheme:()=>{},
    handleChange:()=>{},
    handlechangetoggle:()=>{},
})
export default MYcontext;