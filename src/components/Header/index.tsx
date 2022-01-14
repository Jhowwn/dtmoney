import logoImg from '../../Assets/logo.svg';

import { Container, Contet } from './styles';

export function Header() {
    return (
        <Container>
            <Contet>
                <img src={logoImg} alt="dt money" />
                <button type="button">
                    Nova transação
                </button>
            </Contet>
        </Container>
    )
}