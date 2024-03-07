
'use client'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/app/api/loginUser";
import { Button } from "@/app/components/Button";
import { Input, InputType } from "@/app/components/Input";
import Contents from "@/app/components/Contents/Contents";
import { useRouter } from 'next/navigation'
import { setCookie } from "nookies";
import { HttpError } from "@/app/http";
import Link from "next/link";


//validando campos

const LoginSchema=z.object({
    email:z.string().email('Formato do email inválido'),
    password:z.string().min(6,'Senha precisa de no minímo 6 caracteres'),
    
     })
     //tipando o objeto de validação
type LoginFormData=z.infer<typeof LoginSchema>

export default function Login(){
   //criando constantes de validação
   const signUpForm = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  })
  const router = useRouter();
const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = signUpForm


async function acessLogin(data:LoginFormData )
{   
  try {
    debugger;
    const token=await loginUser({
    
        email:data.email,
        senhaHas:data.password,        
    })
    if (token!=null) {
      setCookie(undefined, 'token', token, {
        maxAge: 50*1000,
        path: '/',
      })
     /// setUser(jdecode<UserData>(token))
      reset(),
      router.push('pages/homepage')
    }else{
      alert('Login Invalido')
      reset()
      router.push('/')
    }
  
  }
  catch (err) {
    if (err instanceof HttpError) {
      alert({ message: err.message, type: 'error' })
      await router.push('/')
    } else {
      alert({
        message: 'Não foi possível realizar o login.',
        type: 'error',
      })
      await router.push('/')
    }
  }

}
    return (

     <Contents>
   
     <div className='flex items-center justify-center p-4 sm:ml-6 w-screen h-screen opacity-70'>
    
    
      <div className='shadow shadow-blue-700 flex items-center justify-center max-w-96  mb-4 rounded bg-blue-50 dark:bg-gray-800'>
       
       
      
        <form onSubmit={handleSubmit(acessLogin)} className='w-full max-w-lg p-5'>
                <div className="text-3xl text-center font-extrabold ...">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
            Acessar
          </span>
        </div>
                <div className='flex flex-wrap -mx-3 mb-6 py-2'>
                    <div className='w-full px-3'>
                   
                        <h3>Email</h3>
                        <Input.Field
                        id="email"
                        type={InputType.email}
                        placeholder=""
                        {...register('email')}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                        <p className="text-gray-600 text-xs italic">Exemplo: mariajose@hotmail.com</p>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3'>
                        <h3>Senha</h3>
                        <Input.Field
                        id='password'
                        type={InputType.password}
                        placeholder="******"
                        {...register('password')}
                        />
                        {errors.password && <span>{errors.password.message}</span>}
                        <p className='text-gray-600 text-xs italic'>Exemplo :#ffcd37</p>
                    </div>
                </div>
                <div className='flex items-center justify-center py-4'>
                
                    <Button>Enviar</Button>
                
                </div>        
                <a href="/Acess/forgout" className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Esqueceu a Senha?</a>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 py-4">
                                    Deseja se Cadastrar?
                 <Link className="text-blue-700 hover:underline dark:text-blue-500" 
                  href={'/pages/usuario'}
                 >
                cadastrar</Link>
                        </div>
        </form>
      
     
      </div>
      </div>     
   
    </Contents>
   
    )
    
}




