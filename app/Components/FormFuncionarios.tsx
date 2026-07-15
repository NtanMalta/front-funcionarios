"use client"

import { useState } from "react"
import api from "../services/api"

export default function FormFuncionario(){
    

    const [nome,setNome] = useState("")
    const [cargo,setCargo] = useState("")
    const [salario, setSalario] = useState("")

    async function cadastrar(e:any) {
        e.preventDefault()

        try {
            const response = await api.post("/funcionarios",{
                nome,
                cargo,
                salario:Number(salario)
            })
            alert("Funcionario cadastrado com sucesso")
        } catch (error) {
            alert("Erro ao cadastrar")
            console.log(error)
        }
        
    }
    
    return(
        <form onSubmit={cadastrar}>
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
                Cadastrar
            </button>
        </form>
    )
}