import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeButton } from "./ThemeButton/ThemeButton";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import { useContext } from "react";
import icon from "/public/eng256x256.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { RootContext } from "../../main";
import { LanguageButton } from "./LanguageButton/LanguageButton";

export const HeaderBar = ({ setModeTheme, modeTheme }) => {
  const { language, setLanguage, isDrawer, setIsDrawer } =
    useContext(RootContext);

  const toggleDrawer = (newOpen) => () => {
    setIsDrawer(newOpen);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 2048 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <NavLink
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <motion.div whileTap={{ scale: 0.95 }}>
                <Box style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <img src={icon} width={30} />
                  <Typography
                    variant="subtitle1"
                    component="h6"
                    sx={{ flexGrow: 1 }}
                  >
                    Language lift
                  </Typography>
                </Box>
              </motion.div>
            </NavLink>
          </Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <LanguageButton language={language} setLanguage={setLanguage} />
            <DrawerMenu toggleDrawer={toggleDrawer} open={isDrawer} />
            <ThemeButton setModeTheme={setModeTheme} modeTheme={modeTheme} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

HeaderBar.propTypes = {
  setModeTheme: PropTypes.func.isRequired,
  modeTheme: PropTypes.oneOf(["light", "dark"]).isRequired,
};
