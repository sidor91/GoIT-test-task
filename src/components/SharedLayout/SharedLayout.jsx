import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/';
import {
  StyledHeader,
  StyledContainer,StyledMain,
} from './SharedLayout.styled';
import Navigation from 'components/Navigation/Navigation';

export default function SharedLayout() {
    return <StyledContainer>
        <StyledHeader>
            <Navigation/>
        </StyledHeader>
        <StyledMain>
            <Suspense fallback={Loader}>
                <Outlet/>
            </Suspense>
        </StyledMain>
    </StyledContainer>
}