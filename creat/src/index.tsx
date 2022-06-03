import React, { StrictMode } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';

const domain: string | any = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId: string | any = process.env.REACT_APP_AUTH0_CLIENT_ID;

const rootElement: HTMLElement | any = document.getElementById("root");
const root: any = createRoot(rootElement);

root.render(
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        >
        <App />
      </Auth0Provider>,
);

reportWebVitals();