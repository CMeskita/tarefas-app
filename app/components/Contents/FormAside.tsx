import { Button } from "@/app/components/Button";
import FromTarefa from "@/app/components/Contents/FormTarefa";
import { Input, InputType } from "@/app/components/Input";

export default function FormAside(){
  
    return(<>
    
    <aside id="default-sidebar" 

className="fixed top-0 left-0 z-40 w-64 h-screen transition-transhtmlForm -translate-x-full sm:translate-x-0" 
aria-label="Sidebar">
<FromTarefa />
</aside>
    </>)
}