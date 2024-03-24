import mypassword from "../../../public/notebookblue.svg"
import Image, { StaticImageData } from 'next/image'

export default function Logs()
{
return(
    <>
      <div className='flex items-center justify-center p-4 sm:ml-6 w-screen h-screen'>
        <div className=""></div>
    <Image src={mypassword} alt={""} width={200}></Image>
    </div>
    </>
)
}