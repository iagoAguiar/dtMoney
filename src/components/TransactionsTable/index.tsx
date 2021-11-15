import React, { useContext } from "react";
import { Container } from "./styles"
import {  useTransactions } from '../../hooks/useTransactions';


export function TrasactionsTable(){
    const {transactions} =  useTransactions();

    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        
                    </tr>
                </thead>

                <tbody>                
                 {transactions.map(transaction => {
                     return(
                         <tr key={ transaction.id}>
                             <td>{transaction.title}</td>
                              <td className={ transaction.type}>               {/*  Formatar em R$ */}
                                 {new Intl.NumberFormat('pt-BR',{
                                     style: 'currency', 
                                     currency: 'BRL'
                                 }).format(transaction.amount)}
                                 </td>
                             <td>{transaction.category}</td>
                             <td>               {/*  Formatar em R$ */}
                                 {new Intl.DateTimeFormat('pt-BR').format(
                                     new Date(transaction.createdAt)
                                 )}
                                 </td>
                             
                         </tr>
                     )
                 })}
                </tbody>
            </table>
        </Container>
    )
}