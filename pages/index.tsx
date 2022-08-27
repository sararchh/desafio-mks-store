import type { NextPage } from 'next';
import React from 'react';
import { useAppDispatch } from '../src/redux/hook';
import { fecthProducts } from '../src/redux/slices/products/actions';

import HomeScreen from "../src/screen/home/index";


const Home: NextPage = () => {

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fecthProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <HomeScreen />

}

export default Home
