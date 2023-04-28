import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const IconFill = styled(Button)({
  "&": {
    color: "rgba(255, 255, 255, 0.35)",
    whiteSpace: "nowrap",
    fontFamily: "Inter",
    fontWeight: "600",
    padding: "0px",
    minWidth: "auto",
    height: "100%",
    textDecoration: "none",
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  "&:after": {
    borderBottom: "2px solid #1D1D1B",
  },
  "&.Mui-focused": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});
