import React, { FormEvent, useState, useContext } from "react"
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from "../services/api";
import { useTransactions } from "../../hooks/useTransactions";


interface NewTransacionModal{
    isOpen : boolean;
    onRequestClose: () => void;
}


Modal.setAppElement('#root')


export function NewTransacionModal({ isOpen, onRequestClose}: NewTransacionModal ){    

const { createTransaction } = useTransactions();

    const [title , setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');


   async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title, 
            amount,
            category,
            type
            
        })

        setTitle('');
        setAmount(0)
        setCategory('')
        setType('')
        onRequestClose();

    }

    return(
        <Modal 
        isOpen= {isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >

        <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={ closeImg} alt="Fechar" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>
            <input 
                type="text" 
                placeholder="Titulo" 
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input 
                type="number" 
                placeholder="Valor"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    // className={ type === 'deposit' ? 'active' : ''}
                    isActive={ type === 'deposit'}
                    onClick={() => {setType('deposit');}}   
                    activeColor="green"             
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox> 
                <RadioBox
                    type="button"     
                    isActive={ type === 'withdhraw'}   
                    onClick={() => {setType('withdhraw');}}                
                    activeColor="red"             

                >
                    <img src={outcomeImg} alt="Saida" />
                    <span>Saída</span>
                </RadioBox>
                
            </TransactionTypeContainer>

            <input 
            placeholder="Categoria" 
            value={category}

            onChange={event => setCategory(event.target.value)}
            />
            <button type="submit">Cadastrar</button>
        </Container>
        
</Modal>
    );
}