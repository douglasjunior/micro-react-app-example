import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

window.renderReactComponent = window.renderReactComponent || {};

const Providers = ({ children }) => {
    return (
        <Suspense fallback="Carregando ...">
            {children}
        </Suspense>
    );
};

export const createEntry = ({
    name,
    component: Component,
}) => {
    window.renderReactComponent[name] = props => {
        ReactDOM.render(
            <Providers>
                <Component {...props} />
            </Providers>,
            document.currentScript.parentNode,
        );
    };

    if (process.env.NODE_ENV === 'development') {
        window.renderReactComponent[name]();
    }
};
