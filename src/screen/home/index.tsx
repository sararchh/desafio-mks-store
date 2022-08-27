import React from 'react';
import MainTemplate from '../../components/templates/mainTemplate';
import SectionProducts from '../../components/molecules/sectionProducts';

import {Container } from "./styles"

function HomeScreen() {




    return (
        <MainTemplate content={
            <Container>

                  <SectionProducts />

            </Container>
        } />
    );


}

export default HomeScreen;