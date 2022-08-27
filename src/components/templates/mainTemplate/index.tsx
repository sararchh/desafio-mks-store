import React from 'react';
import Header from '../../atoms/header';
import ModalCart from '../../molecules/modalCart';

import { Container, Footer } from './styles';

type Props = {
    content: React.ReactNode
}


const MainTemplate: React.FC<Props> = ({ content }) => {

    const [modalCartOpened, setmModalCartOpened] = React.useState(false);


    return (
        <Container>

            <Header openCart={() => setmModalCartOpened(true)} />

            {modalCartOpened && (
                <ModalCart closeCart={() => setmModalCartOpened(false)} />
            )}


            {content}

            <Footer>
                <p>MKS Sistemas © Todos os direitos reservados</p>
            </Footer>

        </Container>
    );


}

export default MainTemplate;