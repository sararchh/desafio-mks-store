import React from 'react';

import { useAppSelector } from '../../../redux/hook';

import { getListProducts, getLoadingProducts } from '../../../redux/slices/products/slice';

import { ProductProps } from "../../../@types/product.interface"
import Cardproduct from '../../atoms/cardProduct';


import { ContentProducts } from './styles';
import CardProductSkeleton from './skeleton';

const SectionProducts: React.FC = () => {

    const productList = useAppSelector(getListProducts);
    const loading = useAppSelector(getLoadingProducts);
    
    // tambem pode ser feito assim usando o hook do react-redux
    // const productList = useSelector((state: RootState) => state.product.productsList);
    // const loading = useSelector((state: RootState) => state.product.loading);


    return (
        <ContentProducts>

            {loading &&
                [...Array(8)].map((_:any, index: number) => (
                    <CardProductSkeleton key={index} />
                ))
            }

            {!loading && productList.length > 0 && productList.map((item: ProductProps, index: number) => (
                <Cardproduct data={item} key={index} />
            ))}

        </ContentProducts>
    );

}

export default SectionProducts;