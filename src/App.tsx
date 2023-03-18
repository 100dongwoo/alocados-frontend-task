import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Header from '@/components/common/Header';
import ThemeProviderSheet from '@/contexts/ThemeProvider';
import ErrorPage from '@/pages/ErrorPage';
import ExchangeHistoryPage from '@/pages/ExchangeHistoryPage';
import ExchangingPage from '@/pages/ExchangingPage';
import GlobalStyle from '@/styles/global-styles';
import { theme } from '@/styles/theme';

import './App.css';

function App() {
    const AppProvider = ({
        contexts,
        children,
    }: {
        contexts: (({ children }: { children: JSX.Element }) => JSX.Element)[];
        children: JSX.Element;
    }) =>
        contexts.reduce(
            (
                prev: JSX.Element,
                context: ({
                    children,
                }: {
                    children: JSX.Element;
                }) => JSX.Element
            ) =>
                React.createElement(context, {
                    children: prev,
                }),
            children
        );

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppProvider contexts={[ThemeProviderSheet]}>
                <Router>
                    <Header />
                    <Routes>
                        <Route
                            path='/ExchangeHistory'
                            element={<ExchangeHistoryPage />}
                        />

                        <Route path='/404' element={<ErrorPage />} />
                        <Route path='/' element={<ExchangingPage />} />

                        <Route path='*' element={<Navigate to='/404' />} />
                    </Routes>
                </Router>
            </AppProvider>
        </ThemeProvider>
    );
}

export default App;
