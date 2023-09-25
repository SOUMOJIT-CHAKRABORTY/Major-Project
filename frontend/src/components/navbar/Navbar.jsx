import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Input } from "@mui/material";
import { useSignup } from "../../hooks/useSignup";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [opend, setOpend] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();
  const { login, isLoading: isLoggingIn, error: loginError } = useLogin();
  const { user } = useAuthContext();

  const navigator = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleOpend = () => setOpend(true);
  const handleClose = () => setOpen(false);
  const handleClosed = () => setOpend(false);
  const logout = useLogout();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(firstname, lastname, age, email, password);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => navigator("/")}>
          M-ticket booking
        </span>
        <span className="button">Tickets</span>
        <span className="button">Destination</span>
        <span className="button">About us</span>

        <div className="navItems">
          {!user && (
            <>
              <button onClick={handleOpen} className="navButton">
                Register
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                      textAlign: "center",
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    Register
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      mt: 1,
                      display: "grid",
                      justifyContent: "space-between",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    <Input
                      placeholder="Firstname"
                      onChange={(e) => setFirstname(e.target.value)}
                      sx={{ margin: "1rem 0" }}
                    />
                    <Input
                      placeholder="Lastname"
                      onChange={(e) => setLastname(e.target.value)}
                      sx={{ margin: "1rem 0" }}
                    />
                    <Input
                      placeholder="Age"
                      type="number"
                      onChange={(e) => setAge(e.target.value)}
                      sx={{ margin: "1rem 0" }}
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ margin: "1rem 0" }}
                    />
                    <Input
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{ margin: "1rem 0" }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    sx={{ width: "100%", margin: "1rem 0" }}
                    onClick={handleSignup}
                  >
                    Register
                  </Button>
                </Box>
              </Modal>
              <button onClick={handleOpend} className="navButton">
                Login
              </button>
              <Modal
                open={opend}
                onClose={handleClosed}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                      textAlign: "center",
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      mt: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <Input
                      placeholder="Email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ margin: "1rem 0" }}
                    />
                    <Input
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{ margin: "1rem 0" }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    onClick={handleLogin}
                    sx={{ width: "100%", margin: "1rem 0" }}
                  >
                    Login
                  </Button>
                </Box>
              </Modal>
            </>
          )}
          {user && (
            <>
              <button onClick={() => logout()} className="navButton">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
