import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { api } from "../components/services/api";


interface Transaction{
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt:  string
}


type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
//type TransactionInput2 = Pick<Transaction, 'title' | 'amount'| 'type' | 'category' >;


interface TransactionsProviderProps{
    children: ReactNode
}

interface TransactionsContextData{
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput ) => Promise<void>
}

const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData  // forçar o Typescritp que o objeto vazio é do tipo TransactionsContextData
    );

export function TransactionProvider({children}: TransactionsProviderProps){

    const [ transactions, setTransactions] = useState<Transaction[]>([]);
    

    useEffect(() =>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])
    
    async function createTransaction(transactionInput: TransactionInput){        
    
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date
        })
        const { transaction } = response.data;
        setTransactions([               //Conceito de imutabilidade, estamos criando um novo vetor, adicionando ao final dele a nova transação
            ...transactions,
            transaction
        ])
    }


    return (
        <TransactionContext.Provider value={{
            transactions, createTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    );

}


export function useTransactions(){
    const context = useContext(TransactionContext);

    return context;
}
