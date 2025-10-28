import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Button,
  Typography,
  Avatar,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Alert,
  IconButton,
  Container,
} from "@mui/material";
import {
  Save,
  RestartAlt,
  Person,
  Business,
  Palette,
  Notifications,
  Security,
  PhotoCamera,
  CheckCircle,
} from "@mui/icons-material";

const defaultSettings = {
  admin: { name: "ادمین", email: "admin@company.com", password: "", avatar: null },
  site: { companyName: "شرکت ساختمانی آسپن", logo: null, primaryColor: "#fcb53b" },
  notifications: { emailAlerts: true, projectUpdates: true, newComments: false, newContacts: true },
};

const Settings = () => {
  const [settings, setSettings] = useState(defaultSettings);
  const [saved, setSaved] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("adminSettings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
      if (parsed.admin.avatar) setAvatarPreview(parsed.admin.avatar);
      if (parsed.site.logo) setLogoPreview(parsed.site.logo);
    }
  }, []);

  const handleInputChange = (section, field, value) => {
    setSettings((prev) => ({ ...prev, [section]: { ...prev[section], [field]: value } }));
  };

  const handleToggle = (section, field) => {
    setSettings((prev) => ({ ...prev, [section]: { ...prev[section], [field]: !prev[section][field] } }));
  };

  const handleImageUpload = (section, field, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        if (section === "admin") setAvatarPreview(base64);
        if (section === "site") setLogoPreview(base64);
        handleInputChange(section, field, base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("adminSettings", JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setSettings(defaultSettings);
    setAvatarPreview(null);
    setLogoPreview(null);
    localStorage.removeItem("adminSettings");
  };

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", py: { xs: 2, sm: 3 }  }}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "stretch", sm: "center" }} mb={3} gap={2}>
          <Typography variant="h4" fontWeight="bold" color="#222">تنظیمات پنل</Typography>
          <Box display="flex" gap={1}>
            <Button variant="outlined" startIcon={<RestartAlt />} onClick={handleReset} sx={{ borderColor: "#f44336", color: "#f44336", "&:hover": { borderColor: "#d32f2f", bgcolor: "#ffebee" } }}>
              بازنشانی
            </Button>
            <Button variant="contained" startIcon={<Save />} onClick={handleSave} sx={{ bgcolor: "#4caf50", "&:hover": { bgcolor: "#388e3c" }, fontWeight: "bold" }}>
              ذخیره
            </Button>
          </Box>
        </Box>

        {saved && <Alert icon={<CheckCircle />} severity="success" sx={{ mb: 3, borderRadius: 2 }}>تنظیمات ذخیره شد!</Alert>}

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardHeader title="کاربری" avatar={<Person sx={{ color: "#2196f3" }} />} sx={{ bgcolor: "#e3f2fd" }} />
              <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                  <input accept="image/*" style={{ display: "none" }} id="avatar-upload" type="file" onChange={(e) => handleImageUpload("admin", "avatar", e)} />
                  <label htmlFor="avatar-upload">
                    <Avatar src={avatarPreview} sx={{ width: 90, height: 90, bgcolor: "#fcb53b", fontSize: "2rem", cursor: "pointer", border: "3px solid #fff", boxShadow: 2 }}>
                      {settings.admin.name[0]}
                    </Avatar>
                  </label>
                  <Typography variant="caption" color="text.secondary" mt={1}>تغییر عکس</Typography>
                </Box>
                <Grid container spacing={1.5}>
                  <Grid item xs={12}><TextField fullWidth label="نام" size="small" value={settings.admin.name} onChange={(e) => handleInputChange("admin", "name", e.target.value)} /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="ایمیل" type="email" size="small" value={settings.admin.email} onChange={(e) => handleInputChange("admin", "email", e.target.value)} /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="رمز جدید" type="password" size="small" value={settings.admin.password} onChange={(e) => handleInputChange("admin", "password", e.target.value)} placeholder="••••••••" /></Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardHeader title="سایت" avatar={<Business sx={{ color: "#9c27b0" }} />} sx={{ bgcolor: "#f3e5f5" }} />
              <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                  <input accept="image/*" style={{ display: "none" }} id="logo-upload" type="file" onChange={(e) => handleImageUpload("site", "logo", e)} />
                  <label htmlFor="logo-upload">
                    <Box sx={{ width: 100, height: 70, bgcolor: "#f5f5f5", border: "2px dashed #ccc", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", overflow: "hidden" }}>
                      {logoPreview ? <img src={logoPreview} alt="لوگو" style={{ width: "100%", height: "100%", objectFit: "contain" }} /> : <Business sx={{ fontSize: 36, color: "#999" }} />}
                    </Box>
                  </label>
                  <Typography variant="caption" color="text.secondary" mt={1}>لوگو (120x80)</Typography>
                </Box>
                <Grid container spacing={1.5}>
                  <Grid item xs={12}><TextField fullWidth label="نام شرکت" size="small" value={settings.site.companyName} onChange={(e) => handleInputChange("site", "companyName", e.target.value)} /></Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth size="small">
                      <InputLabel>رنگ اصلی</InputLabel>
                      <Select value={settings.site.primaryColor} label="رنگ اصلی" onChange={(e) => handleInputChange("site", "primaryColor", e.target.value)}>
                        {["#fcb53b", "#2196f3", "#4caf50", "#9c27b0"].map(c => (
                          <MenuItem key={c} value={c}>
                            <Box display="flex" alignItems="center" gap={1}>
                              <Box sx={{ width: 18, height: 18, bgcolor: c, borderRadius: 1 }} />
                              {c === "#fcb53b" ? "نارنجی" : c === "#2196f3" ? "آبی" : c === "#4caf50" ? "سبز" : "بنفش"}
                            </Box>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardHeader title="اعلان" avatar={<Notifications sx={{ color: "#ff9800" }} />} sx={{ bgcolor: "#fff3e0" }} />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" fontWeight="bold" mb={1.5}>اعلان ایمیلی</Typography>
                    <FormControlLabel control={<Switch checked={settings.notifications.emailAlerts} onChange={() => handleToggle("notifications", "emailAlerts")} color="primary" />} label="همه اعلان‌ها" sx={{ mb: 1 }} />
                    <FormControlLabel control={<Switch checked={settings.notifications.projectUpdates} onChange={() => handleToggle("notifications", "projectUpdates")} color="primary" />} label="پروژه‌ها" sx={{ mb: 1 }} />
                    <FormControlLabel control={<Switch checked={settings.notifications.newComments} onChange={() => handleToggle("notifications", "newComments")} color="primary" />} label="نظرات" sx={{ mb: 1 }} />
                    <FormControlLabel control={<Switch checked={settings.notifications.newContacts} onChange={() => handleToggle("notifications", "newContacts")} color="primary" />} label="تماس‌ها" sx={{ mb: 1 }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" fontWeight="bold" mb={1.5}>امنیت</Typography>
                    <Button fullWidth variant="outlined" startIcon={<Security />} sx={{ mb: 1, justifyContent: "flex-start" }}>تغییر رمز</Button>
                    {/* <Button fullWidth variant="outlined" startIcon={<Email />} sx={{ justifyContent: "flex-start" }}>SMTP</Button> */}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Settings;