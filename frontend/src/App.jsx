import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import theme from './styles/theme';
import AppRoutes from './AppRoutes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ChatWidget from './components/chatbot/ChatWidget';
import ErrorBoundary from './components/common/ErrorBoundary';
import './styles/global.css';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <div className="App">
              <Header />
              <main>
                <AppRoutes />
              </main>
              <Footer />
              <ChatWidget />
            </div>
          </Router>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;