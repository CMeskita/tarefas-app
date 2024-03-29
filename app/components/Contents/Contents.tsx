

interface IContentsProps {
    children:any
   
  }
    

export default function Contents({children}:IContentsProps){
    return (
        <div className='flex-1 items-center justify-center mb-2 w-full scroll-smooth md:scroll-auto h-full'>
    
        {children}
       </div>
    )
}