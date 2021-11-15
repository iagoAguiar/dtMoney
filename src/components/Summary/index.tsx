import React, {useContext } from 'react';
import { Container } from './styles';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

export function Summary(){

    const {transactions} =  useTransactions();

    // const totalDeposits = transactions.reduce((acc, transaction) =>{
    //     if(transaction.type == 'deposit'){
    //         return acc + transaction.amount;
    //     }

    //     return acc; 
    // },0)

    const summary = transactions.reduce((acc, transaction)=>{
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else{
            acc.witdraws += transaction.amount 
            acc.total -= transaction.amount;    
            

        }

        return acc;
    }, {
        deposits: 0,
        witdraws: 0,
        total: 0,
    })
    
    const data =  useTransactions();

    
    return (
        <Container>

{/* Modo antigo  para usar contexto!! */}
            {/* <TransactionContext.Consumer>
                {(data) =>{
                    console.log(data)
                    return <p>data</p>;
                }}
            </TransactionContext.Consumer>   */}


            <div>
                <header>
                    <p>Entradas</p>
                    <img src={ incomeImg } alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                                     style: 'currency', 
                                     currency: 'BRL'
                                 }).format(summary.deposits)} 
                                 
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={ outcomeImg } alt="Saidas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                                     style: 'currency', 
                                     currency: 'BRL'
                                 }).format(summary.witdraws)} 
                                 
                </strong>            
                </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={ totalImg } alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                                     style: 'currency', 
                                     currency: 'BRL'
                                 }).format(summary.total)} 
                                 
                </strong>          
                  </div>
        </Container>
    )
}