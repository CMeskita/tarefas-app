import { Aside } from "@/app/components/Aside"
import Contents from "@/app/components/Contents/Contents"
import { Nav } from "@/app/components/Nav"
import { usuarioLogado } from "@/app/pages/UsuarioLogado";





interface IDefaultLayoutProps
{
    children:any
}

export default function  DefaultLayout  ({children}:IDefaultLayoutProps)  {
    const obj=usuarioLogado();
    return (
    
    <div className="min-h-screen flex flex-col bg-white scroll-smooth md:scroll-auto">

  
    
        <Contents>   
        <Nav usuarioLogado={obj.nome} />
        <Aside /> 
            {children}
            </Contents>
          
    </div>
    )
  }