import Tarefa from "@/app/pages/tarefa/page"

interface IFromAside{
    tenant:number
}

export default function FormAside({tenant}:IFromAside){
  
    return(<>

<aside id="default-sidebar" 

className="fixed top-0 left-0 z-40 w-64 h-screen transition-transhtmlForm -translate-x-full sm:translate-x-0" 
aria-label="Sidebar">

</aside>
    </>)
}