import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  	ApolloClient,
  	ApolloProvider
} from "@apollo/client";
import {cache} from './cache';
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

initializeIcons();

const client = new ApolloClient({
  	cache,
  	uri: 'http://localhost:3000',
});


ReactDOM.render(
	<ApolloProvider client={client}>
		<React.StrictMode>
		    <App />
		</React.StrictMode>,
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
