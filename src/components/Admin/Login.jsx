import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import { Person, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ADMIN_CREDENTIALS = {
  name: "ادمین",
  password: "123456",
};

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      name === ADMIN_CREDENTIALS.name &&
      password === ADMIN_CREDENTIALS.password
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      localStorage.setItem("adminName", name);
      navigate("/admin");
    } else {
      setError("نام یا رمز عبور اشتباه است!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        fontFamily: "yekan",
      }}
    >
      <Card
        sx={{
          maxWidth: 420,
          width: "100%",
          borderRadius: 4,
          boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            bgcolor: "#fcb53b",
            color: "#fff",
            p: 3,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              bgcolor: "rgba(255,255,255,0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <Lock sx={{ fontSize: 40 }} />
          </Box>
          <Typography variant="h5" fontWeight="bold">
            ورود به پنل مدیریت
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
            فقط ادمین مجاز است
          </Typography>
        </Box>

        <CardContent sx={{ p: 4 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="نام ادمین"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={{ color: "#fcb53b" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#fcb53b" },
                  "&.Mui-focused fieldset": { borderColor: "#e0a42f" },
                },
              }}
            />

            <TextField
              fullWidth
              label="رمز عبور"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#fcb53b" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#fcb53b" },
                  "&.Mui-focused fieldset": { borderColor: "#e0a42f" },
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                py: 1.5,
                bgcolor: "#fcb53b",
                "&:hover": { bgcolor: "#e0a42f" },
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              ورود به پنل
            </Button>
          </form>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 3, display: "block", textAlign: "center" }}
          >
            <strong></strong> <strong></strong>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
