import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButtom } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form action="">
                    <input type="text" placeholder='Descrição' required />
                    <input type="number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />

                    <TransactionType>
                        <TransactionTypeButtom variant='income'>
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButtom>

                        <TransactionTypeButtom variant='outcome'>
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButtom>
                    </TransactionType>

                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}