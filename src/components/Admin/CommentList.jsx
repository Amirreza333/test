
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
  Rating,
} from "@mui/material";
import {
  Delete,
  Search,
  FilterList,
  Reply,
  CheckCircle,
  Pending,
  Cancel,
} from "@mui/icons-material";

const rawComments = [
  { id: 1, name: "علی رضایی", text: "کار بسیار حرفه‌ای بود، ممنون از تیم شما!", rating: 5, project: "آسپن هایتس", date: "۱۴۰۴/۰۴/۰۱", status: "تایید شده", replies: [] },
  { id: 2, name: "سارا محمدی", text: "زمان تحویل کمی دیر بود، ولی کیفیت عالی بود.", rating: 4, project: "ویلای لوکس شمال", date: "۱۴۰۴/۰۳/۲۸", status: "در انتظار", replies: [] },
  { id: 3, name: "محمد حسینی", text: "توصیه می‌کنم، خدمات عالی!", rating: 5, project: "مرکز تجاری تهران", date: "۱۴۰۴/۰۳/۲۰", status: "تایید شده", replies: ["ممنون از نظرتون!"] },
  { id: 4, name: "فاطمه احمدی", text: "قیمت‌ها بالاست، ولی ارزشش رو داره.", rating: 4, project: "پنت‌هاوس دریاچه", date: "۱۴۰۴/۰۳/۱۵", status: "رد شده", replies: [] },
];

const CommentList = () => {
  const [comments, setComments] = useState(rawComments);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("همه");
  const [deleteDialog, setDeleteDialog] = useState({ open: false, id: null, name: "" });
  const [replyDialog, setReplyDialog] = useState({ open: false, comment: null });
  const [replyText, setReplyText] = useState("");

  const filteredComments = useMemo(() => {
    return comments.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.text.includes(searchTerm) ||
        c.project.includes(searchTerm);
      const matchesStatus = filterStatus === "همه" || c.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [comments, searchTerm, filterStatus]);

  const handleDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id));
    setDeleteDialog({ open: false, id: null, name: "" });
  };

  const handleReply = () => {
    const updated = comments.map((c) =>
      c.id === replyDialog.comment.id
        ? { ...c, replies: [...c.replies, replyText] }
        : c
    );
    setComments(updated);
    setReplyDialog({ open: false, comment: null });
    setReplyText("");
  };

  const getStatusChip = (status) => {
    const config = {
      "تایید شده": { color: "#4caf50", bg: "#d4edda", icon: <CheckCircle fontSize="small" /> },
      "در انتظار": { color: "#ff9800", bg: "#fff3cd", icon: <Pending fontSize="small" /> },
      "رد شده": { color: "#f44336", bg: "#f8d7da", icon: <Cancel fontSize="small" /> },
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
        مدیریت نظرات
      </Typography>

      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}>
            <TextField
              fullWidth
              size="small"
              placeholder="جستجو در نام، متن یا پروژه..."
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
                <MenuItem value  value="تایید شده">تایید شده</MenuItem>
                <MenuItem value="در انتظار">در انتظار</MenuItem>
                <MenuItem value="رد شده">رد شده</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardHeader
          title={`نظرات (${filteredComments.length})`}
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
                  <TableCell sx={{ fontWeight: "bold" }}>کاربر</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>متن نظر</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>امتیاز</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>پروژه</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>تاریخ</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>وضعیت</TableCell>
                  <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>عملیات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredComments.map((c) => (
                  <TableRow key={c.id} hover sx={{ "&:hover": { bgcolor: "#fff9e6" } }}>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={2}>
                        <Avatar sx={{ bgcolor: "#fcb53b", color: "#fff", fontWeight: "bold" }}>
                          {c.name[0]}
                        </Avatar>
                        <Typography fontWeight="bold">{c.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          maxWidth: 300,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        title={c.text}
                      >
                        {c.text}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Rating value={c.rating} readOnly size="small" />
                    </TableCell>
                    <TableCell>{c.project}</TableCell>
                    <TableCell>{c.date}</TableCell>
                    <TableCell>{getStatusChip(c.status)}</TableCell>
                    <TableCell>
                      <Box display="flex" justifyContent="center" gap={1}>
                        <Tooltip title="پاسخ">
                          <IconButton
                            size="small"
                            sx={{ color: "#2196f3", "&:hover": { bgcolor: "#e3f2fd" } }}
                            onClick={() => setReplyDialog({ open: true, comment: c })}
                          >
                            <Reply />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="حذف">
                          <IconButton
                            size="small"
                            sx={{ color: "#f44336", "&:hover": { bgcolor: "#ffebee" } }}
                            onClick={() =>
                              setDeleteDialog({ open: true, id: c.id, name: c.name })
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
          حذف نظر
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            آیا مطمئن هستید که می‌خواهید نظر کاربر <strong>{deleteDialog.name}</strong> را حذف کنید؟
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
        open={replyDialog.open}
        onClose={() => {
          setReplyDialog({ open: false, comment: null });
          setReplyText("");
        }}
        dir="rtl"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: "bold", color: "#2196f3" }}>
          پاسخ به نظر
        </DialogTitle>
        <DialogContent dividers>
          {replyDialog.comment && (
            <>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                کاربر: <strong>{replyDialog.comment.name}</strong>
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  p: 2,
                  bgcolor: "#f9f9f9",
                  borderRadius: 2,
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                }}
              >
                {replyDialog.comment.text}
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="متن پاسخ"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                variant="outlined"
                size="small"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setReplyDialog({ open: false, comment: null });
              setReplyText("");
            }}
          >
            لغو
          </Button>
          <Button
            onClick={handleReply}
            variant="contained"
            sx={{ bgcolor: "#4caf50", "&:hover": { bgcolor: "#388e3c" } }}
          >
            ارسال پاسخ
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CommentList;