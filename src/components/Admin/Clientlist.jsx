import React, { useState, useMemo } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Tooltip,
  Grid,
} from "@mui/material";
import {
  Phone,
  Edit,
  Delete,
  Search,
  FilterList,
  Person,
  CheckCircle,
  Pending,
  Cancel,
  Save,
  Close,
} from "@mui/icons-material";


const rawClients = [
  { id: 1, name: "علی محمدی", phone: "09123456789", project: "آسپن هایتس", date: "۱۴۰۴/۰۲/۱۵", status: "فعال", avatar: "A" },
  { id: 2, name: "سارا احمدی", phone: "09987654321", project: "ویلای لوکس شمال", date: "۱۴۰۴/۰۳/۰۱", status: "فعال", avatar: "S" },
  { id: 3, name: "رضا حسینی", phone: "09351234567", project: "مرکز تجاری تهران", date: "۱۴۰۴/۰۳/۱۰", status: "منتظر", avatar: "R" },
  { id: 4, name: "مریم رضایی", phone: "09181234567", project: "پنت‌هاوس دریاچه", date: "۱۴۰۴/۰۳/۲۰", status: "غیرفعال", avatar: "M" },
  { id: 5, name: "محمد کریمی", phone: "09211234567", project: "آسپن هایتس", date: "۱۴۰۴/۰۴/۰۵", status: "فعال", avatar: "M" },
];

const ClientList = () => {
  const [clients, setClients] = useState(rawClients);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("همه");
  const [deleteDialog, setDeleteDialog] = useState({ open: false, id: null, name: "" });

  const [editDialog, setEditDialog] = useState({
    open: false,
    client: null,
  });

 
  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const matchesSearch =
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.phone.includes(searchTerm) ||
        client.project.includes(searchTerm);
      const matchesStatus = filterStatus === "همه" || client.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [clients, searchTerm, filterStatus]);


  const handleDelete = (id) => {
    setClients(clients.filter((c) => c.id !== id));
    setDeleteDialog({ open: false, id: null, name: "" });
  };

  
  const handleEdit = (client) => {
    setEditDialog({ open: true, client: { ...client } });
  };

  
  const handleSave = () => {
    const updatedClients = clients.map((c) =>
      c.id === editDialog.client.id ? editDialog.client : c
    );
    setClients(updatedClients);
    setEditDialog({ open: false, client: null });
  };

  
  const handleInputChange = (field, value) => {
    setEditDialog((prev) => ({
      ...prev,
      client: { ...prev.client, [field]: value },
    }));
  };

  const getStatusChip = (status) => {
    const config = {
      فعال: { color: "#4caf50", bg: "#d4edda", icon: <CheckCircle fontSize="small" /> },
      منتظر: { color: "#ff9800", bg: "#fff3cd", icon: <Pending fontSize="small" /> },
      غیرفعال: { color: "#f44336", bg: "#f8d7da", icon: <Cancel fontSize="small" /> },
    };
    const { color, bg, icon } = config[status] || {};
    return (
      <Chip
        icon={icon}
        label={status}
        size="small"
        sx={{ bgcolor: bg, color, fontWeight: "bold", fontSize: "0.8rem" }}
      />
    );
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, fontFamily: "yekan" }}>
      <Typography variant="h4" fontWeight="bold" mb={3} color="#222">
        مدیریت مشتریان
      </Typography>

    
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}>
            <TextField
              fullWidth
              size="small"
              placeholder="جستجو بر اساس نام، تلفن یا پروژه..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{ maxWidth: { md: 400 } }}
            />
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel>وضعیت</InputLabel>
              <Select
                value={filterStatus}
                label="وضعیت"
                onChange={(e) => setFilterStatus(e.target.value)}
                startAdornment={<FilterList sx={{ mr: 1 }} />}
              >
                <MenuItem value="همه">همه</MenuItem>
                <MenuItem value="فعال">فعال</MenuItem>
                <MenuItem value="منتظر">منتظر</MenuItem>
                <MenuItem value="غیرفعال">غیرفعال</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              sx={{ bgcolor: "#fcb53b", "&:hover": { bgcolor: "#e0a42f" } }}
              startIcon={<Person />}
            >
              مشتری جدید
            </Button>
          </Box>
        </CardContent>
      </Card>

    
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardHeader
          title={`مشتریان (${filteredClients.length})`}
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
                  <TableCell sx={{ fontWeight: "bold" }}>مشتری</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>تلفن</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>پروژه</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>تاریخ ثبت</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>وضعیت</TableCell>
                  <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>عملیات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id} hover sx={{ "&:hover": { bgcolor: "#fff9e6" } }}>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={2}>
                        <Avatar sx={{ bgcolor: "#fcb53b", color: "#fff", fontWeight: "bold" }}>
                          {client.avatar}
                        </Avatar>
                        <Typography fontWeight="bold">{client.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell dir="ltr" sx={{ fontFamily: "monospace" }}>
                      {client.phone}
                    </TableCell>
                    <TableCell>{client.project}</TableCell>
                    <TableCell>{client.date}</TableCell>
                    <TableCell>{getStatusChip(client.status)}</TableCell>
                    <TableCell>
                      <Box display="flex" justifyContent="center" gap={1}>
                        <Tooltip title="تماس">
                          <IconButton
                            size="small"
                            sx={{ color: "#4caf50", "&:hover": { bgcolor: "#e8f5e9" } }}
                            onClick={() => window.location.href = `tel:${client.phone}`}
                          >
                            <Phone />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="ویرایش">
                          <IconButton
                            size="small"
                            sx={{ color: "#2196f3", "&:hover": { bgcolor: "#e3f2fd" } }}
                            onClick={() => handleEdit(client)}
                          >
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="حذف">
                          <IconButton
                            size="small"
                            sx={{ color: "#f44336", "&:hover": { bgcolor: "#ffebee" } }}
                            onClick={() =>
                              setDeleteDialog({ open: true, id: client.id, name: client.name })
                            }
                          >
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

     
      <Dialog
        open={deleteDialog.open}
        onClose={() => setDeleteDialog({ open: false, id: null, name: "" })}
        dir="rtl"
      >
        <DialogTitle sx={{ fontWeight: "bold", color: "#d32f2f" }}>
          حذف مشتری
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            آیا مطمئن هستید که می‌خواهید مشتری <strong>{deleteDialog.name}</strong> را حذف کنید؟
            این عمل قابل بازگشت نیست.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, id: null, name: "" })}>
            لغو
          </Button>
          <Button
            onClick={() => handleDelete(deleteDialog.id)}
            sx={{ color: "#d32f2f", fontWeight: "bold" }}
          >
            حذف
          </Button>
        </DialogActions>
      </Dialog>

      
      <Dialog
        open={editDialog.open}
        onClose={() => setEditDialog({ open: false, client: null })}
        dir="rtl"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: "bold", color: "#2196f3", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          ویرایش مشتری
          <IconButton onClick={() => setEditDialog({ open: false, client: null })}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {editDialog.client && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="نام مشتری"
                  value={editDialog.client.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="تلفن"
                  value={editDialog.client.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  variant="outlined"
                  size="small"
                  dir="ltr"
                  sx={{ fontFamily: "monospace" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="پروژه"
                  value={editDialog.client.project}
                  onChange={(e) => handleInputChange("project", e.target.value)}
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>وضعیت</InputLabel>
                  <Select
                    value={editDialog.client.status}
                    label="وضعیت"
                    onChange={(e) => handleInputChange("status", e.target.value)}
                  >
                    <MenuItem value="فعال">فعال</MenuItem>
                    <MenuItem value="منتظر">منتظر</MenuItem>
                    <MenuItem value="غیرفعال">غیرفعال</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setEditDialog({ open: false, client: null })}
            startIcon={<Close />}
          >
            لغو
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{ bgcolor: "#4caf50", "&:hover": { bgcolor: "#388e3c" } }}
            startIcon={<Save />}
          >
            ذخیره تغییرات
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ClientList;