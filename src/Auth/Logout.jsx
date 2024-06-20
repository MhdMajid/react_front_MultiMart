import Cookie from 'cookie-universal'
import { Axios } from "../back-end/api/Axios";
import { Link, useNavigate } from "react-router-dom";

 const Logout = ({classlog}) => {
    const cookie = Cookie();
    const nav = useNavigate()
    async function  hanleLogout () {
        try{
            const res = await Axios.get(`auth/logout`);
                console.log(res)
                cookie.remove('e-c')
                cookie.remove('rloe')
                nav('/log')
        }
         catch(err){console.log(err)};
        }

            
  return (<Link className={classlog} onClick={hanleLogout} >Logout</Link>)
  
    }
    export default Logout
