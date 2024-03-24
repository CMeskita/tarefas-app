
interface IFormaRedondaProps{
    className:string
    variant?: string
}
export function FormaRedonda({className,variant}:IFormaRedondaProps){
    return(
        <div 
    className= {`h-3 w-3 shadow shadow-gray-700 rounded-full flex flex-shrink-0 justify-center items-center font-mono ${className} ${variant}`}></div>
    )
 
}