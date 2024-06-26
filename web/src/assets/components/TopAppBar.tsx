import { AppBar, Avatar, Toolbar, Typography, styled } from "@mui/material";

export default function TopAppBar() {
  return (
    <StyledAppBar>
      <Toolbar>
        <ToolbarContainer>
          <Typography variant={"h6"} color={"black"}>
            {"Nick App"}
          </Typography>
          <Avatar />
        </ToolbarContainer>
      </Toolbar>
    </StyledAppBar>
  );
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: "absolute",
  zIndex: theme.zIndex.drawer + 1,
  borderBottom: `1px solid #000000`,
  boxShadow: "none",
  left: 0,
  marginLeft: theme.measure.sideBarWidth,
  width: `calc(100% - ${theme.measure.sideBarWidth})`,
}));

const ToolbarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));
