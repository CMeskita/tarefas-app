
import  Contents  from "@/app/components/Contents/Contents"
import { Nav } from "@/app/components/Nav"
import { ReactNode } from "react"





interface IDefaultLayoutProps
{
    children:ReactNode
}

export default function  DefaultLayout  ({children}:IDefaultLayoutProps)  {
 
    return (
    
    <div className="min-h-screen flex flex-col bg-white scroll-smooth md:scroll-auto">
        
        <Nav usuarioLogado={""} />
        <Contents>  
            {children}
            </Contents>
          
    </div>
    )
  }