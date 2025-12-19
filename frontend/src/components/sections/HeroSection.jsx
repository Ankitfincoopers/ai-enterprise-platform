// frontend/src/components/sections/HeroSection.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = ({ data, settings, isAdmin = false }) => {
  const theme = useTheme();
  
  const sectionStyles = {
    position: 'relative',
    backgroundColor: settings?.backgroundColor || theme.palette.background.default,
    color: settings?.textColor || theme.palette.text.primary,
    paddingTop: settings?.paddingTop || '6rem',
    paddingBottom: settings?.paddingBottom || '6rem',
    marginTop: settings?.marginTop || '0',
    marginBottom: settings?.marginBottom || '0',
    borderRadius: settings?.borderRadius || '0',
    boxShadow: settings?.shadow || 'none',
    overflow: 'hidden',
  };

  if (settings?.backgroundImage) {
    sectionStyles.backgroundImage = `url(${settings.backgroundImage})`;
    sectionStyles.backgroundSize = 'cover';
    sectionStyles.backgroundPosition = 'center';
    sectionStyles.backgroundRepeat = 'no-repeat';
    
    if (settings.backgroundOverlay) {
      sectionStyles.position = 'relative';
      sectionStyles['&::before'] = {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: settings.backgroundOverlay,
        zIndex: 1,
      };
    }
  }

  return (
    <Box sx={sectionStyles}>
      {settings?.backgroundImage && settings.backgroundOverlay && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: settings.backgroundOverlay,
            zIndex: 1,
          }}
        />
      )}
      
      <Container 
        maxWidth={settings?.layout === 'full' ? false : 'lg'} 
        sx={{ position: 'relative', zIndex: 2 }}
      >
        <Grid 
          container 
          spacing={6} 
          alignItems="center"
          direction={settings?.layout === 'image_right' ? 'row-reverse' : 'row'}
        >
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {data?.subtitle && (
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    mb: 2,
                    letterSpacing: '0.5px',
                  }}
                >
                  {data.subtitle}
                </Typography>
              )}
              
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  mb: 3,
                  lineHeight: 1.2,
                }}
                dangerouslySetInnerHTML={{ __html: data?.title }}
              />
              
              {data?.description && (
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: theme.palette.text.secondary,
                    mb: 4,
                    lineHeight: 1.7,
                  }}
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              )}
              
              {/* Buttons */}
              {data?.buttons && data.buttons.length > 0 && (
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 4 }}>
                  {data.buttons.map((button, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {button.isExternal ? (
                        <Button
                          component="a"
                          href={button.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant={button.variant || 'contained'}
                          size={button.size || 'large'}
                          sx={{
                            backgroundColor: button.color || theme.palette.primary.main,
                            color: button.variant === 'outline' ? 
                              (button.color || theme.palette.primary.main) : 'white',
                            borderColor: button.color || theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: button.variant === 'outline' ? 
                                `${button.color || theme.palette.primary.main}10` : 
                                `${button.color || theme.palette.primary.main}dd`,
                            },
                          }}
                        >
                          {button.text}
                        </Button>
                      ) : (
                        <Button
                          component={Link}
                          to={button.url}
                          variant={button.variant || 'contained'}
                          size={button.size || 'large'}
                          sx={{
                            backgroundColor: button.color || theme.palette.primary.main,
                            color: button.variant === 'outline' ? 
                              (button.color || theme.palette.primary.main) : 'white',
                            borderColor: button.color || theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: button.variant === 'outline' ? 
                                `${button.color || theme.palette.primary.main}10` : 
                                `${button.color || theme.palette.primary.main}dd`,
                            },
                          }}
                        >
                          {button.text}
                        </Button>
                      )}
                    </motion.div>
                  ))}
                </Box>
              )}
            </motion.div>
          </Grid>
          
          {/* Media Content */}
          {data?.media && data.media.length > 0 && (
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {data.media.map((media, index) => (
                  <Box
                    key={index}
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    }}
                  >
                    {media.type === 'image' ? (
                      <img
                        src={media.url}
                        alt={media.alt}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    ) : media.type === 'video' ? (
                      <video
                        src={media.url}
                        poster={media.thumbnail}
                        autoPlay={media.autoplay}
                        loop={media.loop}
                        muted={media.muted}
                        playsInline
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    ) : null}
                  </Box>
                ))}
              </motion.div>
            </Grid>
          )}
        </Grid>
      </Container>
      
      {/* Admin Edit Button */}
      {isAdmin && (
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 100,
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="warning"
            onClick={() => console.log('Edit section:', data._id)}
          >
            Edit Section
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default HeroSection;