"use client"

import { useState } from "react"

export default function FormFuncionario(){
    

    const [nome,setNome] = useState("")
    const [cargo,setCargo] = useState("")
    const [salario, setSalario] = useState("")

    async function cadastrar(e:any) {
        e.preventDefault()

        try {
            
        } catch (error) {
            
        }
        
    }
    
    return(
        <form>
            <h2>Cadastro de Funcionario</h2>

            <input type="text"
            placeholder="Nome..."
            value={nome}
            onChange={(e)=> setNome(e.target.value)}
            />

             <input type="text"
            placeholder="Cargo..."
            value={cargo}
            onChange={(e)=> setCargo(e.target.value)}
            />

             <input type="text"
            placeholder="Salario..."
            value={salario}
            onChange={(e)=> setSalario(e.target.value)}
            />

            <button>
                
            </button>
        </form>
    )
}