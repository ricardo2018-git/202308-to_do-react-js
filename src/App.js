import React, {useState, useRef} from 'react'

export default function App() {

  // STATE
    const [listaTarefas, setListaTarefas] = useState(()=>{return[]})  // Retorna um Array vazio
    const [tarefa, setTarefa] = useState(()=>{return ''})             // Retorna uma string vazia

  // REF
    const idTarefa = useRef(0)  // Id da tarefa
    const inputRef = useRef()   // Vai dar controle sobre o elemento HTML

  // METODOS
    function adicionarTarefa(){

      if(inputRef.current.value.length >= 1){                                           // Verifica se campo esta vazio
        setListaTarefas(old=>{return [...old, {id: idTarefa.current, texto: tarefa}]})  // Adiciona um item na lista e mantem os antigos
        idTarefa.current++                                                              // Incrementa ID
        setTarefa('')                                                                   // Apaga tarefa que foi digitado no campo
        inputRef.current.focus()                                                        // Foca no campo
      }else{
        alert("Digite uma tarefa no campo!")                                            // Caixa de Mensagem
        inputRef.current.focus()                                                        // Foca no campo
      }

    }

    function limparTarefas(){
      setListaTarefas(old=>{return []}) // Retorna Array vazio, reseta lista
      idTarefa.current = 0              // Reseta Id
    }

    function removerTarfa(id){
      const tmp = listaTarefas.filter(tarefa => tarefa.id !== id) // Retorna lista com todos os elemento que o ID seja diferente do que foi passado
      setListaTarefas(tmp)                                        // Atualiza lista
    }

  return (
    <>
      <h1>Gestor de Tarefas</h1>
      <hr />
      <input ref={inputRef} type='text' value={tarefa} onChange={(evento)=>{setTarefa(evento.target.value)}} />
      <div>
        <button onClick={adicionarTarefa}>Adicionar</button>
        <button onClick={limparTarefas}>Limpar Tudo</button>
      </div>
      <hr />
      <p>Tarefas: </p>
      {listaTarefas.map((item)=>{
        return <p key={item.id}>{item.texto} - <button onClick={()=>{removerTarfa(item.id)}}>Remover</button> </p>
      })}
    </>
  )
}
