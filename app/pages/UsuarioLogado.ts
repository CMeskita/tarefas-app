
import { parseCookies, setCookie } from "nookies";

import jdecode from "jwt-decode";

interface UserData {
    sub: string
  }
  
export function usuarioLogado(){
    //const [user, setUser] = useState<UserData>()
    const { 'token': token } = parseCookies()
   
  
  const user=jdecode<UserData>(token);
  const usuarioLogin=JSON.stringify(user,['email','nome','tenant','iat']);
  const obj=JSON.parse(usuarioLogin);
  
  return obj;
}