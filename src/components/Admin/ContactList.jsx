import React, { useState, useMemo, useEffect } from "react";
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
} from "@mui/material";
import {
  Mail,
  Phone,
  Event,
  Delete,
  Search,
  FilterList,
  MarkEmailRead,
  MarkEmailUnread,
} from "@mui/icons-material";

const getInitialContacts = () => {
  const saved = localStorage.getItem("adminContacts");
  if (saved) return JSON.parse(saved);
  return [
    { id: 1, name: "علی رضایی", email: "ali@example.com", phone: "09123456789", message: "سلام، قیمت پروژه آسپن هایتس چنده؟", date: "۱۴۰۴/۰۴/۰۱", time: "14:32", read: false },
    { id: 2, name: "سارا محمدی", email: "sara@example.com", phone: "09987654321", message: "درخواست مشاوره طراحی داخلی دارم.", date: "۱۴۰۴/۰۳/۳۰", time: "10:15", read: true },
    { id: 3, name: "محمد حسینی", email: "mohammad@example.com", phone: "09351234567", message: "سایت شما مشکل داره، صفحه تماس کار نمی‌کنه.", date: "۱۴۰۴/۰۳/۲۸", time: "19:45", read: false },
  ];
};

const ContactList = () => {
  const [contacts, setContacts] = useState(getInitialContacts());
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRead, setFilterRead] = useState("همه");
  const [deleteDialog, setDeleteDialog] = useState({ open: false, id: null, name: "" });

  useEffect(() => {
    localStorage.setItem("adminContacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = useMemo(() => {
    return contacts.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.includes(searchTerm) ||
        c.phone.includes(searchTerm) ||
        c.message.includes(searchTerm);
      const matchesFilter =
        filterRead === "همه" ||
        (filterRead === "خوانده شده" && c.read) ||
        (filterRead === "خوانده نشده" && !c.read);
      return matchesSearch && matchesFilter;
    });
  }, [contacts, searchTerm, filterRead]);

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
    setDeleteDialog({ open: false, id: null, name: "" });
  };

  const toggleRead = (id) => {
    setContacts(contacts.map((c) => (c.id === id ? { ...c, read: !c.read } : c)));
  };

  const getReadChip = (read) => {
    return read ? (
      <Chip icon={<MarkEmailRead fontSize="small" />} label="خوانده شده" size="small" sx={{ bgcolor: "#d4edda", color: "#155724", fontWeight: "bold", fontSize: "0.75rem" }} />
    ) : (
      <Chip icon={<MarkEmailUnread fontSize="small" />} label="خوانده نشده" size="small" sx={{ bgcolor: "#fff3cd", color: "#856404", fontWeight: "bold", fontSize: "0.75rem" }} />
    );
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, fontFamily: "yekan" }}>
      <Typography variant="h4" fontWeight="bold" mb={3} color="#222">
        مدیریت پیام‌های تماس
      </Typography>

      <Card sx={{ mb: 3, borderRadius: 2, boxShadow: 2 }}>
        <CardContent>
          <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2}>
            <TextField
              fullWidth
              size="small"
              placeholder="جستجو..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }}
              sx={{ maxWidth: { sm: 350 } }}
            />
            <FormControl size="small" sx={{ minWidth: { xs: "100%", sm: 150 } }}>
              <InputLabel>وضعیت</InputLabel>
              <Select value={filterRead} label="وضعیت" onChange={(e) => setFilterRead(e.target.value)} startAdornment={<FilterList sx={{ mr: 1 }} />}>
                <MenuItem value="همه">همه</MenuItem>
                <MenuItem value="خوانده شده">خوانده شده</MenuItem>
                <MenuItem value="خوانده نشده">خوانده نشده</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
        <CardHeader
          title={`پیام‌ها (${filteredContacts.length})`}
          sx={{ bgcolor: "#fcb53b", color: "#fff", "& .MuiCardHeader-title": { fontWeight: "bold" } }}
        />
        <CardContent sx={{ p: 0, overflowX: "auto" }}>
          <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: "#f9f9f9" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>فرستنده</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>ایمیل</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>تلفن</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>پیام</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>تاریخ</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>وضعیت</TableCell>
                  <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>عملیات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredContacts.map((c) => (
                  <TableRow key={c.id} hover sx={{ "&:hover": { bgcolor: "#fff9e6" }, ...(c.read ? {} : { bgcolor: "#fffbe6" }) }}>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1.5}>
                        <Avatar sx={{ bgcolor: "#fcb53b", color: "#fff", fontWeight: "bold", width: 36, height: 36 }}>{c.name[0]}</Avatar>
                        <Typography fontWeight="bold" fontSize="0.9rem">{c.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell><Box display="flex" alignItems="center" gap={0.5}><Mail fontSize="small" sx={{ color: "#666" }} />{c.email}</Box></TableCell>
                    <TableCell dir="ltr" sx={{ fontFamily: "monospace", fontSize: "0.85rem" }}>{c.phone}</TableCell>
                    <TableCell>
                      <Typography sx={{ maxWidth: { xs: 150, md: 250 }, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={c.message}>
                        {c.message}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <Event fontSize="small" sx={{ color: "#666" }} />
                        <Box>
                          <Typography variant="body2" fontSize="0.8rem">{c.date}</Typography>
                          <Typography variant="caption" color="text.secondary">{c.time}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{getReadChip(c.read)}</TableCell>
                    <TableCell>
                      <Box display="flex" justifyContent="center" gap={0.5}>
                        <Tooltip title={c.read ? "خوانده نشده" : "خوانده شده"}>
                          <IconButton size="small" sx={{ color: c.read ? "#ff9800" : "#4caf50" }} onClick={() => toggleRead(c.id)}>
                            {c.read ? <MarkEmailUnread /> : <MarkEmailRead />}
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="حذف">
                          <IconButton size="small" sx={{ color: "#f44336" }} onClick={() => setDeleteDialog({ open: true, id: c.id, name: c.name })}>
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

      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false })} dir="rtl">
        <DialogTitle sx={{ fontWeight: "bold", color: "#d32f2f" }}>حذف پیام</DialogTitle>
        <DialogContent><DialogContentText>آیا مطمئن هستید که می‌خواهید پیام <strong>{deleteDialog.name}</strong> را حذف کنید؟</DialogContentText></DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false })}>لغو</Button>
          <Button onClick={() => handleDelete(deleteDialog.id)} sx={{ color: "#d32f2f", fontWeight: "bold" }}>حذف</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactList;