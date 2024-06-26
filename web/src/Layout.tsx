import { styled } from "@mui/system";
import TopAppBar from "./assets/components/TopAppBar";
import SideBar from "./assets/components/SideBar";
import { Toolbar } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Root>
      <TopAppBar />
      <SideBar />
      <Page>
        <Toolbar />
        {children}
      </Page>
    </Root>
  );
}

const Root = styled("div")({
  display: "flex",
});

const Page = styled("div")({
  width: "100%",
});
