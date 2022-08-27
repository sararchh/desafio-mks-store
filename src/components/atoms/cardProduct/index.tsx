import React from 'react';

import { FiShoppingBag } from "react-icons/fi";

import { Container, ImageStyled, ContentInfo, ContentRow, ButtonStyled } from './styles';

import { ProductProps } from "../../../@types/product.interface"
import { addProductToCard } from '../../../redux/slices/cart/actions';
import { useAppDispatch } from '../../../redux/hook';

type Props = {
    data: ProductProps
}

const Cardproduct: React.FC<Props> = ({ data }) => {

    const dispatch = useAppDispatch();

    return (
        <Container>

            <ImageStyled src={data?.photo} width={140} height={140} alt={data?.name} />

            <ContentInfo>
                <ContentRow>
                    <p>{data?.name}</p>
                    <span>
                        <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0, }).format(Number(data?.price))}</p>
                    </span>
                </ContentRow>
                <p className='description'>{data?.description.length > 70 ? `${data?.description.substring(0,70)}...` : data?.description}</p>

            </ContentInfo>

            <ButtonStyled onClick={()=>dispatch(addProductToCard(data))}>
                <FiShoppingBag />
                <p>COMPRAR</p>
            </ButtonStyled>

        </Container>
    );


}

export default Cardproduct;