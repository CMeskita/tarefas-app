
interface ITagProps {
   
  className:string
  variant?: string
   
  }

export function Tag({className,variant}:ITagProps){
    return(<>
        <div className={`shadow shadow-gray-700 flex items-center justify-center max-w-50 rounded  dark:bg-gray-800 ${className} ${variant} `}>
       
    <div className={`left-0 p-2 border-1 h-2`}>

</div>
</div>
    </>)
}