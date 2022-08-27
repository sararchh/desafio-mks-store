import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FiShoppingCart } from "react-icons/fi";

import { Container, ContentLeft, ContentRight } from './styles';
import { useAppSelector } from '../../../redux/hook';
import { getCart } from '../../../redux/slices/cart/slice';

type Props = {
    openCart: ()=>void
}

const Header: React.FC<Props> = ({openCart}) => {

    const cart = useAppSelector(getCart);

    return (
        <Container>
            <ContentLeft>
                <Link href="/">
                    <a>
                        {/* <Image width={150} height={45} src='/logo.png' /> */}
                        <p>MKS <span>Sistemas</span></p>
                    </a>
                </Link>
            </ContentLeft>

            <ContentRight>

                <button onClick={openCart}>
                        <FiShoppingCart />
                        <span>{cart.length}</span>
                </button>

            </ContentRight>

        </Container>
    );


}

export default Header;