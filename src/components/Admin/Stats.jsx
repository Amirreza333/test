import React, { useMemo } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  AttachMoney,
  Construction,
  People,
  Comment,
  ContactMail,
  CalendarToday,
} from "@mui/icons-material";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyRevenue = [
  { month: "فروردین", درآمد: 1.2, پروژه: 3 },
  { month: "اردیبهشت", درآمد: 2.1, پروژه: 5 },
  { month: "خرداد", درآمد: 1.8, پروژه: 4 },
  { month: "تیر", درآمد: 3.4, پروژه: 7 },
  { month: "مرداد", درآمد: 2.9, پروژه: 6 },
  { month: "شهریور", درآمد: 3.8, پروژه: 8 },
];

const projectStatusData = [
  { name: "در حال ساخت", value: 12, color: "#fcb53b" },
  { name: "تکمیل شده", value: 8, color: "#4caf50" },
  { name: "متوقف شده", value: 2, color: "#f44336" },
];

const recentActivity = [
  { id: 1, type: "پروژه", action: "شروع پروژه آسپن هایتس", time: "۲ ساعت پیش", icon: <Construction /> },
  { id: 2, type: "مشتری", action: "ثبت مشتری جدید: سارا احمدی", time: "۴ ساعت پیش", icon: <People /> },
  { id: 3, type: "نظر", action: "نظر جدید از علی رضایی", time: "۶ ساعت پیش", icon: <Comment /> },
  { id: 4, type: "تماس", action: "پیام تماس از محمد حسینی", time: "۱ روز پیش", icon: <ContactMail /> },
];

const Stats = () => {
  const stats = useMemo(() => {
    const totalRevenue = monthlyRevenue.reduce((sum, m) => sum + m.درآمد, 0);
    const totalProjects = monthlyRevenue.reduce((sum, m) => sum + m.پروژه, 0);
    const avgRevenuePerProject = totalRevenue / totalProjects;
    const growth = ((monthlyRevenue[5].درآمد - monthlyRevenue[0].درآمد) / monthlyRevenue[0].درآمد) * 100;

    return {
      totalRevenue: totalRevenue.toFixed(1),
      totalProjects,
      avgRevenuePerProject: avgRevenuePerProject.toFixed(2),
      growth: growth.toFixed(1),
    };
  }, []);

  const StatCard = ({ title, value, icon, color, trend }) => (
    <Card sx={{ borderRadius: 3, boxShadow: 3, bgcolor: "#fff" }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" fontWeight="bold" color={color}>
              {value}
            </Typography>
            {trend !== undefined && (
              <Typography
                variant="caption"
                color={trend > 0 ? "success.main" : "error.main"}
                display="flex"
                alignItems="center"
                mt={1}
                fontWeight="bold"
              >
                {trend > 0 ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
                {Math.abs(trend)}%
              </Typography>
            )}
          </Box>
          <Avatar sx={{ bgcolor: `${color}15`, color, width: 56, height: 56 }}>
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, fontFamily: "yekan" }}>
      <Typography variant="h4" fontWeight="bold" mb={4} color="#222">
        آمار و تحلیل
      </Typography>

      <Grid container spacing={3} mb={5}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="درآمد کل (میلیارد)"
            value={stats.totalRevenue}
            icon={<AttachMoney />}
            color="#2196f3"
            trend={+48.2}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="تعداد پروژه"
            value={stats.totalProjects}
            icon={<Construction />}
            color="#fcb53b"
            trend={+32.1}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="میانگین درآمد پروژه"
            value={`${stats.avgRevenuePerProject} میلیارد`}
            icon={<TrendingUp />}
            color="#4caf50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="رشد درآمد"
            value={`${stats.growth}%`}
            icon={<People />}
            color="#9c27b0"
            trend={+stats.growth}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} mb={5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, height: "100%" }}>
            <CardHeader title="درآمد و تعداد پروژه (ماهانه)" />
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="پروژه"
                    stroke="#fcb53b"
                    strokeWidth={3}
                    name="تعداد پروژه"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="درآمد"
                    stroke="#2196f3"
                    strokeWidth={3}
                    name="درآمد (میلیارد)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, height: "100%" }}>
            <CardHeader title="وضعیت پروژه‌ها" />
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={projectStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {projectStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardHeader
          title="آخرین فعالیت‌ها"
          sx={{
            bgcolor: "#fcb53b",
            color: "#fff",
            "& .MuiCardHeader-title": { fontWeight: "bold" },
          }}
        />
        <CardContent sx={{ p: 0 }}>
          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#f9f9f9" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>نوع</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>توضیحات</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>زمان</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentActivity.map((activity) => (
                  <TableRow key={activity.id} hover sx={{ "&:hover": { bgcolor: "#fff9e6" } }}>
                    <TableCell>
                      <Chip
                        icon={activity.icon}
                        label={activity.type}
                        size="small"
                        sx={{
                          bgcolor: "#fff3cd",
                          color: "#856404",
                          fontWeight: "bold",
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight="medium">{activity.action}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1} color="text.secondary">
                        <CalendarToday fontSize="small" />
                        {activity.time}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Stats;