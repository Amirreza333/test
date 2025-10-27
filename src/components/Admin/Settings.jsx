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
  Divider,
} from "@mui/material";
import {
  Save,
  RestartAlt,
  Person,
  Business,
  Palette,
  Notifications,
  Email,
  Security,
  PhotoCamera,
  CheckCircle,
} from "@mui/icons-material";

const defaultSettings = {
  admin: {
    name: "ادمین",
    email: "admin@company.com",
    password: "",
    avatar: null,
  },
  site: {
    companyName: "شرکت ساختمانی آسپن",
    logo: null,
    primaryColor: "#fcb53b",
  },
  notifications: {
    emailAlerts: true,
    projectUpdates: true,
    newComments: false,
    newContacts: true,
  },
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
    setSettings((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleToggle = (section, field) => {
    setSettings((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: !prev[section][field] },
    }));
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
    <Box sx={{ p: { xs: 2, md: 3 }, fontFamily: "yekan" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" color="#222">
          تنظیمات پنل
        </Typography>
        <Box display="flex" gap={2}>
          <Button
            variant="outlined"
            startIcon={<RestartAlt />}
            onClick={handleReset}
            sx={{
              borderColor: "#f44336",
              color: "#f44336",
              "&:hover": { borderColor: "#d32f2f", bgcolor: "#ffebee" },
            }}
          >
            بازنشانی
          </Button>
          <Button
            variant="contained"
            startIcon={<Save />}
            onClick={handleSave}
            sx={{
              bgcolor: "#4caf50",
              "&:hover": { bgcolor: "#388e3c" },
              fontWeight: "bold",
            }}
          >
            ذخیره تغییرات
          </Button>
        </Box>
      </Box>

      {saved && (
        <Alert
          icon={<CheckCircle />}
          severity="success"
          sx={{ mb: 3, borderRadius: 2 }}
        >
          تنظیمات با موفقیت ذخیره شد!
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardHeader
              title="تنظیمات کاربری"
              avatar={<Person sx={{ color: "#2196f3" }} />}
              sx={{
                bgcolor: "#e3f2fd",
                "& .MuiCardHeader-title": { fontWeight: "bold" },
              }}
            />
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="avatar-upload"
                  type="file"
                  onChange={(e) => handleImageUpload("admin", "avatar", e)}
                />
                <label htmlFor="avatar-upload">
                  <Avatar
                    src={avatarPreview}
                    sx={{
                      width: 100,
                      height: 100,
                      bgcolor: "#fcb53b",
                      fontSize: "2rem",
                      cursor: "pointer",
                      border: "3px solid #fff",
                      boxShadow: 3,
                    }}
                  >
                    {settings.admin.name[0]}
                  </Avatar>
                  <IconButton
                    component="span"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      bgcolor: "#fff",
                      "&:hover": { bgcolor: "#f5f5f5" },
                    }}
                  >
                    <PhotoCamera sx={{ color: "#666" }} />
                  </IconButton>
                </label>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  کلیک کنید برای تغییر عکس
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="نام ادمین"
                    value={settings.admin.name}
                    onChange={(e) => handleInputChange("admin", "name", e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="ایمیل"
                    type="email"
                    value={settings.admin.email}
                    onChange={(e) => handleInputChange("admin", "email", e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="رمز عبور جدید (خالی = بدون تغییر)"
                    type="password"
                    value={settings.admin.password}
                    onChange={(e) => handleInputChange("admin", "password", e.target.value)}
                    variant="outlined"
                    size="small"
                    placeholder="••••••••"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardHeader
              title="تنظیمات سایت"
              avatar={<Business sx={{ color: "#9c27b0" }} />}
              sx={{
                bgcolor: "#f3e5f5",
                "& .MuiCardHeader-title": { fontWeight: "bold" },
              }}
            />
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="logo-upload"
                  type="file"
                  onChange={(e) => handleImageUpload("site", "logo", e)}
                />
                <label htmlFor="logo-upload">
                  <Box
                    sx={{
                      width: 120,
                      height: 80,
                      bgcolor: "#f5f5f5",
                      border: "2px dashed #ccc",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    {logoPreview ? (
                      <img src={logoPreview} alt="لوگو" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    ) : (
                      <Business sx={{ fontSize: 40, color: "#999" }} />
                    )}
                  </Box>
                  <IconButton
                    component="span"
                    sx={{
                      position: "absolute",
                      bottom: -10,
                      right: -10,
                      bgcolor: "#fff",
                      "&:hover": { bgcolor: "#f5f5f5" },
                      boxShadow: 2,
                    }}
                  >
                    <PhotoCamera sx={{ color: "#666" }} />
                  </IconButton>
                </label>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  لوگو شرکت (120x80)
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="نام شرکت"
                    value={settings.site.companyName}
                    onChange={(e) => handleInputChange("site", "companyName", e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel>رنگ اصلی</InputLabel>
                    <Select
                      value={settings.site.primaryColor}
                      label="رنگ اصلی"
                      onChange={(e) => handleInputChange("site", "primaryColor", e.target.value)}
                    >
                      <MenuItem value="#fcb53b">
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box sx={{ width: 20, height: 20, bgcolor: "#fcb53b", borderRadius: 1 }} />
                          نارنجی (پیش‌فرض)
                        </Box>
                      </MenuItem>
                      <MenuItem value="#2196f3">
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box sx={{ width: 20, height: 20, bgcolor: "#2196f3", borderRadius: 1 }} />
                          آبی
                        </Box>
                      </MenuItem>
                      <MenuItem value="#4caf50">
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box sx={{ width: 20, height: 20, bgcolor: "#4caf50", borderRadius: 1 }} />
                          سبز
                        </Box>
                      </MenuItem>
                      <MenuItem value="#9c27b0">
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box sx={{ width: 20, height: 20, bgcolor: "#9c27b0", borderRadius: 1 }} />
                          بنفش
                        </Box>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardHeader
              title="تنظیمات اعلان"
              avatar={<Notifications sx={{ color: "#ff9800" }} />}
              sx={{
                bgcolor: "#fff3e0",
                "& .MuiCardHeader-title": { fontWeight: "bold" },
              }}
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" fontWeight="bold" mb={2} color="#333">
                    اعلان‌های ایمیلی
                  </Typography>
                  <Box sx={{ "& > *": { mb: 2 } }}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.notifications.emailAlerts}
                          onChange={() => handleToggle("notifications", "emailAlerts")}
                          color="primary"
                        />
                      }
                      label="ارسال ایمیل برای همه اعلان‌ها"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.notifications.projectUpdates}
                          onChange={() => handleToggle("notifications", "projectUpdates")}
                          color="primary"
                        />
                      }
                      label="به‌روزرسانی پروژه‌ها"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.notifications.newComments}
                          onChange={() => handleToggle("notifications", "newComments")}
                          color="primary"
                        />
                      }
                      label="نظرات جدید"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.notifications.newContacts}
                          onChange={() => handleToggle("notifications", "newContacts")}
                          color="primary"
                        />
                      }
                      label="پیام‌های تماس جدید"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" fontWeight="bold" mb={2} color="#333">
                    امنیت
                  </Typography>
                  <Box sx={{ "& > *": { mb: 2 } }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<Security />}
                      sx={{
                        justifyContent: "flex-start",
                        borderColor: "#e0e0e0",
                        color: "#666",
                        "&:hover": { borderColor: "#ccc", bgcolor: "#f9f9f9" },
                      }}
                    >
                      تغییر رمز عبور
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<Email />}
                      sx={{
                        justifyContent: "flex-start",
                        borderColor: "#e0e0e0",
                        color: "#666",
                        "&:hover": { borderColor: "#ccc", bgcolor: "#f9f9f9" },
                      }}
                    >
                      تنظیمات ایمیل SMTP
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;