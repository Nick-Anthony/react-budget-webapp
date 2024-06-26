import { Drawer, Typography, styled } from "@mui/material";

export default function SideBar() {
  return (
    <StyledDrawer anchor={"left"} variant={"permanent"} open>
      <Typography variant={"h6"}>SideBar</Typography>
    </StyledDrawer>
  );
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: theme.measure.sideBarWidth,
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.main,
    width: theme.measure.sideBarWidth,
    borderRight: "1px solid",
    borderRightColor: "divider",
  },
}));
