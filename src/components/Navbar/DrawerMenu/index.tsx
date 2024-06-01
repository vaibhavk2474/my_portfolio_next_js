import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material";
import Link from "next/link";
import { MENU_LINKS } from "@/constants";
import DownloadIcon from "@/icons/DownloadIcon";
import ThemeSwitch from "../ThemeSwitch";
import ResumeDownloadLinkBtn from "@/components/UI/ResumeDownloadLink";

const CustomDiv = styled("div")({
  "@media (min-width:601px)": {
    display: "none",
  },
});

const MenuIconCustom = styled(MenuIcon)({
  color: "rgb(var(--color-primary))",
  width: "3rem",
  height: "3rem",
});
const CustomListItem = styled(ListItem)({
  padding: "1rem 2rem",

  "&:hover": {
    background: "#e3e3e3",
  },
});
const CustomList = styled(List)({
  marginTop: "2rem",
});

const DownloadBtnCustom = styled(Box)({
  margin: "1rem 0.5rem",
});

type Anchor = "top" | "left" | "bottom" | "right";

export default function DrawerMenu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box>
        <CustomList>
          {MENU_LINKS.map((cMenu, index) => (
            <CustomListItem key={index} disablePadding>
              <Link href={`${cMenu.link}`}>{cMenu.name}</Link>
            </CustomListItem>
          ))}
        </CustomList>
        <Divider />
        <ThemeSwitch />
      </Box>

      <DownloadBtnCustom>
        <ResumeDownloadLinkBtn />
      </DownloadBtnCustom>
    </Box>
  );

  return (
    <CustomDiv>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIconCustom />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </CustomDiv>
  );
}
