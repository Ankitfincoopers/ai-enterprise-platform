// frontend/src/components/admin/Settings.jsx
import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Alert,
  Grid,
  Card,
  CardContent,
  Divider,
  Tabs,
  Tab,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  IconButton,
} from '@mui/material';
import {
  Save as SaveIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Email as EmailIcon,
  Language as LanguageIcon,
  Notifications as NotificationsIcon,
  Code as CodeIcon,
  Backup as BackupIcon,
  ColorLens as ColorIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [settings, setSettings] = useState({
    siteName: 'NexusAI',
    siteUrl: 'https://nexusai.com',
    siteDescription: 'Enterprise AI Platform',
    contactEmail: 'contact@nexusai.com',
    timezone: 'UTC',
    language: 'en',
    maintenanceMode: false,
    analyticsEnabled: true,
    notificationsEnabled: true,
    emailNotifications: true,
    darkMode: false,
  });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSuccess('Settings saved successfully');
      setTimeout(() => setSuccess(''), 3000);
    }, 1000);
  };

  const tabs = [
    { label: 'General', icon: <LanguageIcon /> },
    { label: 'Appearance', icon: <ColorIcon /> },
    { label: 'Email', icon: <EmailIcon /> },
    { label: 'Security', icon: <SecurityIcon /> },
    { label: 'Notifications', icon: <NotificationsIcon /> },
    { label: 'Advanced', icon: <CodeIcon /> },
  ];

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Settings
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748B' }}>
              Configure your application settings
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={handleSave}
            disabled={saving}
            sx={{
              backgroundColor: '#10B981',
              '&:hover': { backgroundColor: '#059669' },
            }}
          >
            {saving ? 'Saving...' : 'Save Settings'}
          </Button>
        </Box>

        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            {success}
          </Alert>
        )}

        <Tabs 
          value={activeTab} 
          onChange={(e, newValue) => setActiveTab(newValue)}
          sx={{ mb: 3 }}
          scrollButtons="auto"
          variant="scrollable"
        >
          {tabs.map((tab, index) => (
            <Tab 
              key={index} 
              label={tab.label}
              icon={tab.icon}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Paper>

      {activeTab === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  General Settings
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Site Name"
                    value={settings.siteName}
                    onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                    fullWidth
                  />
                  <TextField
                    label="Site URL"
                    value={settings.siteUrl}
                    onChange={(e) => setSettings({ ...settings, siteUrl: e.target.value })}
                    fullWidth
                  />
                  <TextField
                    label="Site Description"
                    value={settings.siteDescription}
                    onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                    fullWidth
                    multiline
                    rows={2}
                  />
                  <TextField
                    label="Contact Email"
                    value={settings.contactEmail}
                    onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                    fullWidth
                  />
                  <FormControl fullWidth>
                    <InputLabel>Timezone</InputLabel>
                    <Select
                      value={settings.timezone}
                      onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                      label="Timezone"
                    >
                      <MenuItem value="UTC">UTC</MenuItem>
                      <MenuItem value="EST">Eastern Time</MenuItem>
                      <MenuItem value="PST">Pacific Time</MenuItem>
                      <MenuItem value="GMT">GMT</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  System Settings
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.maintenanceMode}
                        onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                      />
                    }
                    label="Maintenance Mode"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.analyticsEnabled}
                        onChange={(e) => setSettings({ ...settings, analyticsEnabled: e.target.checked })}
                      />
                    }
                    label="Enable Analytics"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.darkMode}
                        onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
                      />
                    }
                    label="Dark Mode"
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      )}

      {activeTab === 1 && (
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Appearance Settings
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Primary Color"
                  defaultValue="#10B981"
                  fullWidth
                />
                <TextField
                  label="Secondary Color"
                  defaultValue="#3B82F6"
                  fullWidth
                />
                <TextField
                  label="Font Family"
                  defaultValue="Inter, sans-serif"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Border Radius
                  </Typography>
                  <Slider
                    defaultValue={8}
                    valueLabelDisplay="auto"
                    min={0}
                    max={20}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Spacing Scale
                  </Typography>
                  <Slider
                    defaultValue={4}
                    valueLabelDisplay="auto"
                    min={2}
                    max={8}
                    step={1}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}

      {activeTab === 3 && (
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Security Settings
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Require Two-Factor Authentication"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Enable Login Attempts Limit"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Force HTTPS"
            />
            <TextField
              label="Session Timeout (minutes)"
              type="number"
              defaultValue={30}
              fullWidth
            />
            <TextField
              label="Password Minimum Length"
              type="number"
              defaultValue={12}
              fullWidth
            />
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Settings;