import { getTarefasId } from "@/app/api/getTarefasId";
import { detalhesTarefa } from "@/app/pages/detalhesTarefa";
import { useEffect, useState } from "react";

interface IProducts {
    id:string
      descricao :string
      seg :boolean
      ter :boolean
      qua :boolean
      qui :boolean
      sex :boolean
      sab :boolean
      dom :boolean
      tenant:string
}
 
export default function EditarTarefa() {
    //const [products, setProducts] = useState<IProducts[]>([]);
    debugger;
    const id=detalhesTarefa()
    const gettarefas = getTarefasId(id)
 
// Chamada à API utilizando o Client Side Fetching
    
 
    return (
        <div>
          <h1>Products</h1>
        
          <section>
            <ul>
              {gettarefas.then(product => {
                  return (
                      <li key={product.id}>
                        {product.descricao}
                      </li>
                    )
                })}
            </ul>
          </section>
        </div>
      )
}
