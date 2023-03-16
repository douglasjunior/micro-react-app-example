import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

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
    if (window.renderReactComponent[name]) {
        throw new Error('Already exists component with name ' + name);
    }

    window.renderReactComponent[name] = (props, elementRoot) => {
        const root = ReactDOM.createRoot(elementRoot || document.currentScript.parentNode);
        root.render(
            <Providers>
                <Component {...props} />
            </Providers>,
        );
    };

    if (process.env.NODE_ENV === 'development') {
        window.renderReactComponent[name]({}, document.getElementById('root'));
    }
};
