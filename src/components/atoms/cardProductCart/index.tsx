import React from 'react';

import { FiMinus, FiPlus, FiX } from "react-icons/fi";

import { useAppDispatch } from '../../../redux/hook';

import { CartProps } from '../../../@types/cart.interface';
import { UpdateQtdProductToCard, removeProductToCard } from '../../../redux/slices/cart/actions';

import { Container, ContentButtonRemove, ImageStyled, ContentInfo, ContentRow, ContentQuantity } from './styles';

type Props = {
    data: CartProps
}

const CardProductCart: React.FC<Props> = ({ data }) => {

    const dispatch = useAppDispatch();


    const handleMinus = () => {
        if (data?.qtd == 1) return;

        dispatch(UpdateQtdProductToCard(data?.id, data?.qtd - 1))
    }

    const handlePlus = () => {
        dispatch(UpdateQtdProductToCard(data?.id, data?.qtd + 1))
    }


    return (
        <Container>
            <ContentButtonRemove>
                <button className="x-close" onClick={() => dispatch(removeProductToCard(data?.id))}><FiX /></button>
            </ContentButtonRemove>
            <ContentInfo>
                <ImageStyled src={data?.photo} width={60} height={60} alt={data?.name} />
                <ContentRow>
                    <p className="title">{data?.name}</p>

                    <ContentQuantity>
                        <p className="caption">Qtd:</p>
                        <div className="box">
                            <button className="btn-left" onClick={handleMinus} ><FiMinus /></button>
                            <i />
                            <p>{data?.qtd}</p>
                            <i />
                            <button className="btn-right" onClick={handlePlus} ><FiPlus /></button>
                        </div>
                    </ContentQuantity>

                    <span>
                        <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0, }).format(Number(data?.subtotal))}</p>
                    </span>
                </ContentRow>

            </ContentInfo>

        </Container>
    );


}

export default CardProductCart;