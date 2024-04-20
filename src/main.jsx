import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ContactPage from './components/ContactPage'; 
import './index.css';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
