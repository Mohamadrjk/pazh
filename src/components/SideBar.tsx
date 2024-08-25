import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import EventIcon from "@mui/icons-material/Event";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  Collapse,
  Divider,
  ListItemIcon,
  ListItemText,
  Stack,
  useScrollTrigger,
} from "@mui/material";
import SearchDialog from "./SearchDialog";
import { ChevronRight, HistoryOutlined } from "@mui/icons-material";

const Navs = [
  {
    id: 1,
    parent: 0,
    title: "Shops",
    child: [
      {
        icon: <AccountTreeIcon />,
        child: null,
        id: 6,
        parent: 1,
        title: "مدیریت شعب",
      },
    ],
  },
  {
    id: 2,
    parent: 0,
    title: "Events",
    child: [
      {
        icon: <EventIcon />,
        parent: 2,
        child: null,
        id: 7,
        title: "رویداد ها",
      },
    ],
  },
  {
    id: 3,
    parent: 0,
    icon: <EditCalendarIcon />,
    title: "EventLogs",
    child: [
      {
        icon: <HistoryOutlined />,
        parent: 3,
        id: 8,
        child: null,
        title: "تاریخچه رویداد ها",
      },
      {
        parent: 3,
        id: 10,
        child: null,
        title: "مدیریت تایید رویداد ها",
      },
      {
        parent: 3,
        id: 11,
        child: null,
        title: "مدیریت تایید رویداد ها",
      },
      {
        parent: 3,
        id: 12,
        child: null,
        title: "مدیریت تایید رویداد ها",
      },
      {
        parent: 3,
        id: 13,
        child: null,
        title: "مدیریت تایید رویداد ها",
      },
    ],
  },
  {
    id: 4,
    parent: 0,
    title: "Tools",
    child: [
      {
        parent: 4,
        id: 14,

        child: null,
        title: " Update Event list",
      },
      {
        parent: 4,
        id: 15,

        child: null,
        title: " Image Events",
      },
    ],
  },
  {
    id: 5,
    parent: 0,
    title: "Confirm Logs",
    child: [
      {
        parent: 5,
        id: 17,
        child: null,

        title: "مدیریت تایید رویداد ها",
      },
    ],
  },
];

type TDrawerItem = {
  id: number;
  child: Array<TDrawerItem> | null;
  parent: number;
  title: string;
  icon?: React.JSX.Element | null;
};

const DrawerItem = (props: { navbar: TDrawerItem[] | null }) => {
  const CollapsedNav = (props: { item: TDrawerItem }) => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    return (
      <>
        <ListItemButton
          onClick={handleChange}
          className=" !rounded-xl"
          sx={{
            textAlign: "left",
            gap: "5px",
            paddingBlock: "5px",
            flexDirection: {
              xs: "row",
              sm: "row-reverse",
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: "0",
              svg: {
                fontSize: "1.2rem",
              },
            }}
          >
            <ChevronRight
              sx={{
                transform: checked ? "rotate(90deg)" : "rotate(0deg)",
                transition: "all 0.3s",
              }}
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              ".MuiTypography-root": {
                fontSize: "0.8rem",
                textAlign: {
                  xs: "left",
                  sm: "right",
                },
              },
            }}
          >
            {props.item.title}
          </ListItemText>
        </ListItemButton>
        <Collapse collapsedSize={0} in={checked}>
          <DrawerItem navbar={props.item.child} />
        </Collapse>
      </>
    );
  };
  return (
    <>
      {props.navbar?.map((item) => (
        <>
          {item.child ? (
            <CollapsedNav item={item} />
          ) : (
            <ListItemButton
              className={`${
                item.title == "تاریخچه رویداد ها"
                  ? "!bg-slate-300 !text-gray-900"
                  : "inherit"
              }  !mr-5 !rounded-xl`}
              sx={{
                gap: "5px",
                paddingBlock: "2px",
                flexDirection: {
                  xs: "row",
                  sm: "row-reverse",
                },
              }}
              key={item.id}
            >
              <ListItemIcon
                sx={{
                  minWidth: "0",
                  svg: {
                    fontSize: "0.7rem",
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "0.7rem",
                    textAlign: {
                      xs: "left",
                      sm: "right",
                    },
                    fontWeight: 500,
                    textWrap: "nowrap",
                    textOverflow: "ellipsis",
                  },
                }}
              >
                {item.title}
              </ListItemText>
            </ListItemButton>
          )}
        </>
      ))}
    </>
  );
};

const drawerWidth = 240;

interface Props {
  children: React.ReactElement;
}

const drawer = (
  <div dir="rtl">
    <Toolbar
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <List
        sx={{
          backgroundColor: "transparent",
          width: "100%",
        }}
      >
        <DrawerItem navbar={Navs} />
      </List>
    </Toolbar>
  </div>
);
function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
    sx: {
      background: trigger ? "#f8fafc" : "transparent",
      width: { sm: `calc(100%)` },
      ml: { sm: `${drawerWidth}px` },
      color: "black",
    },
  });
}

export default function Sidebar(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <div>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Stack
              direction={"row-reverse"}
              justifyContent={"space-between"}
              flexGrow={1}
              gap={1}
              alignItems={"center"}
            >
              <a className=" cursor-pointer">
                <Stack
                  direction={"row-reverse"}
                  justifyContent={"end"}
                  gap={1}
                  alignItems={"center"}
                  sx={{
                    width: {
                      xs: "auto",
                      sm: drawerWidth - 24,
                    },
                  }}
                >
                  <Avatar src="https://cdn.dribbble.com/users/880427/avatars/small/210a72a9b35329c042d1ea9e531d69db.png?1606230615" />
                  <Typography variant="h6" noWrap component="div">
                    PAZH
                  </Typography>
                </Stack>
              </a>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <SearchDialog>
                <>
                  <Divider />
                  <div className=" h-56 mt-2  ">
                    <div className=" grid grid-cols-2 gap-2">
                      {["رویداد", "خانه", "تاریخچه"].map((i) => (
                        <Button
                          className="grid-cols-1  !text-inherit !rounded-lg text-xs  w-full  "
                          sx={{
                            border: "1px solid #00000015",
                          }}
                        >
                          {i}
                        </Button>
                      ))}
                    </div>
                  </div>
                </>
              </SearchDialog>
            </Stack>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box sx={{ display: "flex", p: 0, mt: 8 }}>
        <Box
          component="main"
          sx={{
            paddingBottom: "20vh",
            flexGrow: 1,
            maxWidth: "100%",
            background: "#ffffff",
            border: "1px solid #00000015",
            borderBottom: "0",
            borderTopRightRadius: {
              xs: "0",
              sm: "25px",
            },
            borderTopLeftRadius: {
              xs: "25px",
              sm: "0",
            },
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            marginTop: {
              xs: "20px",
              sm: 0,
            },
          }}
        >
          {props.children}
        </Box>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                border: "0",
                backgroundColor: "transparent",
                mt: 8,
              },
            }}
            anchor="right"
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}
