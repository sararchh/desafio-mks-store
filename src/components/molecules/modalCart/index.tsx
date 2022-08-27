import React from 'react';

import { FiX } from "react-icons/fi";
import { CartProps } from '../../../@types/cart.interface';
import { ProductProps } from '../../../@types/product.interface';
import { useAppSelector } from '../../../redux/hook';
import { getCart } from '../../../redux/slices/cart/slice';
import CardProductCart from '../../atoms/cardProductCart';
import CardProductCartSkeleton from './skeleton';

import { Container, ContentHeader, ContentList, ContentFooter, ContentSubTotal } from './styles';

type Props = {
    closeCart: () => void;
}

const ModalCart: React.FC<Props> = ({ closeCart }) => {

    const cart = useAppSelector(getCart);

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, []);


    const totalCart = cart.length > 0 ? cart.reduce((acc: number, a: any) => {
        return Number(acc) + Number(a?.subtotal)
    }, 0) : 0;

    const cartSorted = [...cart].sort((a: CartProps, b: CartProps) => a.id - b.id);



    const handleFinish = () => {
        let messageWhatsapp = `Olá, esse e seu pedido: \n`;

        cartSorted.forEach((element) => {
            messageWhatsapp += `- ${element.qtd} ${element?.name} - R$ ${element?.subtotal} \n`;
        })

        messageWhatsapp += `\n *Total*: R$ ${totalCart} \n`;
      
        window.open(`https://wa.me/5527995704833?text=${encodeURI(messageWhatsapp)}`)

    }


    return (
        <Container>
            <ContentHeader>
                <p>Carrinho<br /> de compras</p>
                <button onClick={closeCart}><FiX /></button>
            </ContentHeader>

            {loading && (
                [...Array(3)].map((_:any, index: number) => (
                    <CardProductCartSkeleton key={index} />
                ))
            )}

            {!loading && (
                <>

                    <ContentList>
                        {cart.length > 0 ? cartSorted.map((product: CartProps, index: number) => (
                            <CardProductCart data={product} key={index}/>
                        ))
                            :
                            <p className="empty-cart">Carrinho está vazio.</p>
                        }
                    </ContentList>

                    <ContentFooter>
                        <ContentSubTotal>
                            <p>Total: </p>
                            <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0, }).format(totalCart)}</p>
                        </ContentSubTotal>
                        <button onClick={handleFinish}>
                            Finalizar Compra
                        </button>

                    </ContentFooter>

                </>
            )}


        </Container>
    );


}

export default ModalCart;