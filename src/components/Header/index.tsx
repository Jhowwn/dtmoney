import logoImg from '../../Assets/logo.svg';

import { Container, Contet } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal:() => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {

    return (
        <Container>
            <Contet>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>

            </Contet>
        </Container>
    )
}