import React, { useState, useRef } from 'react';
import { styled } from '@mui/system';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Paper,
  Avatar,
  Menu,
  MenuItem,
  Popper,
  Grow,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import useAuthStore from '../store/authStore';
import RuleIcon from '@mui/icons-material/Rule';

const NavRail = styled(Box)(({ theme }) => ({
  width: '100px',
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2, 0),
  zIndex: theme.zIndex.appBar + 1, // Add this line
}));

const NavItem = styled(ListItemButton)(({ theme, active, disabled }) => ({
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  width: '64px',
  height: '56px',
  margin: theme.spacing(1, 0),
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? 'none' : 'auto',
  '&.Mui-selected': {
    backgroundColor: disabled ? 'transparent' : theme.palette.primary.main,
    color: disabled ? theme.palette.text.disabled : theme.palette.primary.contrastText,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 'auto',
    color: disabled ? theme.palette.text.disabled : (active ? theme.palette.primary.contrastText : 'inherit'),
  },
}));

const navItems = [
  { path: '/main', label: 'Home', icon: <HomeIcon />, disabled: true },
  { path: '/ingredient', label: 'Ingredient', icon: <InventoryIcon />, disabled: true },
  { path: '/product', label: 'Product', icon: <CategoryIcon />, disabled: true },
  {
    path: '/standard', label: 'Standard', icon: <RuleIcon />,
    subItems: [
      { path: '/standard/rmd-standard', label: '원료제조팀규정' },
    ],
  },
  { path: '/records', label: 'Record', icon: <DescriptionIcon /> }, // 레코드 항목 활성화
  { path: '/audit', label: 'Audit', icon: <AssignmentIcon />, disabled: true },
  { path: '/user', label: 'User', icon: <PersonIcon />}
];


function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useAuthStore();
  const isAdmin = user?.role === 'admin';
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (event, item) => {
    if (item.subItems) {
      clearTimeout(timeoutRef.current); // 기존 타임아웃 제거
      setAnchorEl(event.currentTarget);
      setOpenSubMenu(item.label);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenSubMenu(null);
      setAnchorEl(null);
    }, 500); // 타임아웃 시간을 늘림
  };

  const handleSubMenuEnter = () => {
    clearTimeout(timeoutRef.current); // 하위 메뉴가 열려 있도록 함
  };

  const handleSubMenuLeave = () => {
    setOpenSubMenu(null);
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/login');
  };

  return (
    <NavRail component="nav">
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <NavItem
              component={Link}
              to={item.disabled ? '#' : item.path}
              selected={!item.disabled && location.pathname.startsWith(item.path)}
              active={!item.disabled && location.pathname.startsWith(item.path) ? 1 : 0}
              onMouseEnter={(event) => !item.disabled && handleMouseEnter(event, item)}
              onMouseLeave={handleMouseLeave}
              disabled={item.disabled}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ variant: 'caption', align: 'center' }}
              />
            </NavItem>
            {!item.disabled && item.subItems && openSubMenu === item.label && (
              <Popper
                open={true}
                anchorEl={anchorEl}
                placement="right-start"
                transition
                disablePortal
                style={{ zIndex: 1000 }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: 'left top' }}
                  >
                    <Paper
                      onMouseEnter={handleSubMenuEnter}
                      onMouseLeave={handleSubMenuLeave}
                      sx={{ mt: '-8px', ml: '4px', width: '200px' }}
                    >
                      <List dense>
                        {item.subItems.map((subItem) => (
                          <ListItemButton
                            key={subItem.path}
                            component={Link}
                            to={subItem.path}
                            selected={location.pathname === subItem.path}
                            sx={{ pl: 2, pr: 2 }}
                          >
                            <ListItemText primary={subItem.label} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            )}
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ mb: 4 }}>
        <IconButton onClick={handleMenu}>
          <Avatar alt={user?.username} src={user?.avatar} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && !openSubMenu}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>프로필</MenuItem>
          <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
        </Menu>
      </Box>
    </NavRail>
  );
}

export default Navbar;
