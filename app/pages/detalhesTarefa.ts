
import { parseCookies} from "nookies";

export function detalhesTarefa(){
    debugger;//const [user, setUser] = useState<UserData>()
    const { '_id': id } = parseCookies()
   
  return id;
}

  
