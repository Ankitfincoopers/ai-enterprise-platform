import React, { Component } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    
    // Log error to analytics service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="md">
          <Box
            sx={{
              minHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              py: 8,
            }}
          >
            <ErrorOutline sx={{ fontSize: 100, color: 'error.main', mb: 3 }} />
            <Typography variant="h4" gutterBottom fontWeight={600}>
              Oops! Something went wrong
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mb: 4 }}>
              We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                onClick={this.handleReset}
                sx={{
                  backgroundColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Go to Homepage
              </Button>
              <Button
                variant="outlined"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </Button>
              <Button
                variant="text"
                href="/contact"
              >
                Contact Support
              </Button>
            </Box>

            {/* Error details (only in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <Box sx={{ mt: 6, p: 3, backgroundColor: 'background.paper', borderRadius: 2, textAlign: 'left', width: '100%' }}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Error Details
                </Typography>
                <Typography variant="body2" color="error.main" paragraph>
                  {this.state.error.toString()}
                </Typography>
                <Typography variant="caption" component="pre" sx={{ 
                  whiteSpace: 'pre-wrap', 
                  wordBreak: 'break-word',
                  backgroundColor: 'grey.100',
                  p: 2,
                  borderRadius: 1,
                  overflow: 'auto',
                  fontSize: '0.75rem',
                }}>
                  {this.state.errorInfo?.componentStack}
                </Typography>
              </Box>
            )}
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;