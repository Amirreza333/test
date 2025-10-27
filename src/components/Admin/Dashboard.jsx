import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Box,
  Typography,
  Avatar,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Container,
} from "@mui/material";
import {
  Construction,
  People,
  AttachMoney,
  TrendingUp,
  Phone,
  CheckCircle,
  Pending,
} from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const projects = [
  { id: 1, name: "آسپن هایتس", progress: 75, status: "در حال ساخت", budget: "۱.۲ میلیارد" },
  { id: 2, name: "ویلای لوکس شمال", progress: 100, status: "تکمیل شده", budget: "۸۵۰ میلیون" },
  { id: 3, name: "مرکز تجاری تهران", progress: 45, status: "در حال ساخت", budget: "۳.۱ میلیارد" },
  { id: 4, name: "پنت‌هاوس دریاچه", progress: 90, status: "در حال ساخت", budget: "۹۲۰ میلیون" },
];

const recentContacts = [
  { id: 1, name: "علی محمدی", phone: "09123456789", project: "آسپن هایتس", time: "۱۰ دقیقه پیش", avatar: "A" },
  { id: 2, name: "سارا احمدی", phone: "09987654321", project: "ویلای لوکس", time: "۱ ساعت پیش", avatar: "S" },
  { id: 3, name: "رضا حسینی", phone: "09351234567", project: "مرکز تجاری", time: "۳ ساعت پیش", avatar: "R" },
  { id: 4, name: "مریم رضایی", phone: "09181234567", project: "پنت‌هاوس", time: "۵ ساعت پیش", avatar: "M" },
];

const monthlyData = [
  { month: "فروردین", پروژه: 3, درآمد: 1.2 },
  { month: "اردیبهشت", پروژه: 5, درآمد: 2.1 },
  { month: "خرداد", پروژه: 4, درآمد: 1.8 },
  { month: "تیر", پروژه: 7, درآمد: 3.4 },
];

const Dashboard = () => {
  const [stats, setStats] = useState({
    activeProjects: 0,
    completedProjects: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const active = projects.filter(p => p.status === "در حال ساخت").length;
    const completed = projects.filter(p => p.status === "تکمیل شده").length;
    const revenue = projects.reduce((sum, p) => {
      const budget = parseFloat(p.budget.replace(/[^\d.]/g, ""));
      return sum + budget;
    }, 0);

    setStats({ activeProjects: active, completedProjects: completed, totalRevenue: revenue.toFixed(1) });
  }, []);

  const StatCard = ({ title, value, icon, color, trend }) => (
    <Card sx={{ borderRadius: 2, boxShadow: 2, bgcolor: "#fff", height: "100%" }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" fontWeight="bold" color={color}>
              {value}
            </Typography>
            {trend && (
              <Typography variant="caption" color="success.main" display="flex" alignItems="center" mt={1}>
                <TrendingUp fontSize="small" /> {trend}
              </Typography>
            )}
          </Box>
          <Avatar sx={{ bgcolor: `${color}15`, color, width: 48, height: 48 }}>
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3 }, fontFamily: "yekan",  }}>
      <Typography variant="h4" fontWeight="bold" mb={3} color="#222" textAlign="center">
        داشبورد مدیریت
      </Typography>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="پروژه‌های فعال" value={stats.activeProjects} icon={<Construction />} color="#fcb53b" trend="+۲" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="تکمیل‌شده" value={stats.completedProjects} icon={<CheckCircle />} color="#4caf50" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="درآمد کل" value={`${stats.totalRevenue} میلیارد`} icon={<AttachMoney />} color="#2196f3" trend="+۱۲٪" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="مشتریان" value="۲۶" icon={<People />} color="#9c27b0" />
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} lg={7}>
          <Card sx={{ borderRadius: 2, boxShadow: 2, height: "100%" }}>
            <CardHeader title="درآمد و پروژه‌های ماهانه" />
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="پروژه" stroke="#fcb53b" strokeWidth={3} name="پروژه" />
                  <Line yAxisId="right" type="monotone" dataKey="درآمد" stroke="#2196f3" strokeWidth={3} name="درآمد (میلیارد)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Card sx={{ borderRadius: 2, boxShadow: 2, height: "100%" }}>
            <CardHeader 
              title="آخرین تماس‌ها" 
              sx={{ bgcolor: "#fcb53b", color: "#fff", "& .MuiCardHeader-title": { fontWeight: "bold" } }} 
            />
            <CardContent sx={{ p: 0 }}>
              {recentContacts.map((contact, index) => (
                <Box
                  key={contact.id}
                  sx={{
                    display: "flex",
                  
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                    borderBottom: index < recentContacts.length - 1 ? "1px solid #eee" : "none",
                    "&:hover": { bgcolor: "#fff9e6" }
                  }}
                >
                  <Box display="flex" alignItems="center" gap={1.5}>
                    <Avatar sx={{ bgcolor: "#fcb53b", color: "#fff", fontWeight: "bold", width: 40, height: 40 }}>
                      {contact.avatar}
                    </Avatar>
                    <Box>
                      <Typography fontWeight="bold" fontSize="0.95rem">{contact.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{contact.project}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="caption" color="success.main" fontWeight="bold">
                    {contact.time}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
        <CardHeader title="وضعیت پروژه‌ها" />
        <CardContent sx={{ p: 0, overflowX: "auto" }}>
          <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: "#f9f9f9" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>پروژه</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>بودجه</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>پیشرفت</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>وضعیت</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id} hover>
                    <TableCell>{project.name}</TableCell>
                    <TableCell>{project.budget}</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <LinearProgress
                          variant="determinate"
                          value={project.progress}
                          sx={{
                            width: 80,
                            height: 8,
                            borderRadius: 5,
                            bgcolor: "#e0e0e0",
                            "& .MuiLinearProgress-bar": {
                              bgcolor: project.progress === 100 ? "#4caf50" : project.progress >= 70 ? "#fcb53b" : "#f44336",
                            },
                          }}
                        />
                        <Typography variant="body2" fontWeight="bold">{project.progress}%</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={project.status}
                        size="small"
                        icon={project.status === "تکمیل شده" ? <CheckCircle fontSize="small" /> : <Pending fontSize="small" />}
                        sx={{
                          bgcolor: project.status === "تکمیل شده" ? "#d4edda" : "#fff3cd",
                          color: project.status === "تکمیل شده" ? "#155724" : "#856404",
                          fontWeight: "bold"
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;