// frontend/src/components/DynamicPageRenderer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography, CircularProgress, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { pageAPI } from '../services/api';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import TeamSection from './sections/TeamSection';
import ContactSection from './sections/ContactSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';
import ContentSection from './sections/ContentSection';
import GallerySection from './sections/GallerySection';
import PricingSection from './sections/PricingSection';
import StatsSection from './sections/StatsSection';
import FAQSection from './sections/FAQSection';
import TimelineSection from './sections/TimelineSection';
import BlogSection from './sections/BlogSection';
import FormSection from './sections/FormSection';
import VideoSection from './sections/VideoSection';
import ImageGridSection from './sections/ImageGridSection';

const sectionComponents = {
  hero: HeroSection,
  features: FeaturesSection,
  team: TeamSection,
  contact: ContactSection,
  testimonials: TestimonialsSection,
  cta: CTASection,
  content: ContentSection,
  gallery: GallerySection,
  pricing: PricingSection,
  stats: StatsSection,
  faq: FAQSection,
  timeline: TimelineSection,
  blog: BlogSection,
  form: FormSection,
  video: VideoSection,
  image_grid: ImageGridSection,
};

const DynamicPageRenderer = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPage();
  }, [slug]);

  const fetchPage = async () => {
    try {
      setLoading(true);
      const response = await pageAPI.getPage(slug || 'home');
      setPage(response.page);
    } catch (err) {
      console.error('Error fetching page:', err);
      setError(err.message || 'Failed to load page');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1">
          The page you're looking for doesn't exist or has been moved.
        </Typography>
      </Container>
    );
  }

  if (!page) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1">
          The page you're looking for doesn't exist.
        </Typography>
      </Container>
    );
  }

  return (
    <Box>
      {/* Page Title */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h1" sx={{ fontSize: '2.5rem', fontWeight: 700, mb: 2 }}>
          {page.title}
        </Typography>
        {page.metaDescription && (
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
            {page.metaDescription}
          </Typography>
        )}
      </Container>

      {/* Render Sections Dynamically */}
      {page.sections && page.sections.map((section, index) => {
        const SectionComponent = sectionComponents[section.type] || ContentSection;
        
        if (!section.isEnabled) return null;

        return (
          <motion.div
            key={section._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SectionComponent
              data={section}
              settings={section.settings}
              isAdmin={false}
            />
          </motion.div>
        );
      })}

      {/* Empty State */}
      {(!page.sections || page.sections.length === 0) && (
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            No Content Yet
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This page doesn't have any sections yet. Add some content from the admin panel.
          </Typography>
        </Container>
      )}
    </Box>
  );
};

export default DynamicPageRenderer;