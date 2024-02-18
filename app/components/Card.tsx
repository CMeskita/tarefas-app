
interface ICardProps{
    children:any
}
export default function Card({children}:ICardProps){
    return(
        <div 
        className="w-full bg-blue-900 rounded-full flex flex-shrink-0 justify-center items-center text-blue-500 text-2xl font-mono">{children}</div>
    )
 
}