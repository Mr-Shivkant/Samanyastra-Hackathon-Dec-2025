import React from "react";
import {Stack, Typography, Box, Avatar, Chip, Grid, IconButton,} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import data from "../data";
import { useState } from "react";
import profileImg from "../assets/profile.jpg";
import smartshopImg from "../assets/images/smartshop.png";
import taskmasterImg from "../assets/images/task.png";
import weatherImg from "../assets/images/weather.png";


const Portfolio = () => {
  const getSocialIcon = (icon) => {
    switch (icon) {
      case "linkedin":
        return <LinkedInIcon />;
      case "github":
        return <GitHubIcon />;
      case "instagram":
        return <InstagramIcon />;
      case "twitter":
        return <TwitterIcon />;
      default:
        return null;
    }
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Stack
      spacing={8}
      sx={{
        width: "100%",
        overflowX: "hidden",
        bgcolor: "#272727",
        color: "#fff",
        p: { xs: 2, md: 5 },
        m: 0,
      }}
    >
      {/* navbar */}
      <Box
        component="nav"
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          bgcolor: "#110f0fff",
          px: { xs: 2, md: 5 },
          py: 2,
          boxShadow: "0px 3px 8px rgba(0,0,0,0.5)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Typography variant="h6" component="a" sx={{ fontWeight: 600 ,cursor: "pointer" }}>
          
          {data.hero.name} Portfolio
        </Typography>

        {/* desktop Nav */}
        <Box
          component="ul"
          display={{ xs: "none", md: "flex" }}
          sx={{ listStyle: "none", p: 0, m: 0 }}
        >
          {["Home", "About", "Experience", "Projects"].map((item) => (
            <li key={item} style={{ margin: "0 8px" }}>
              <Box
                component="a"
                href={`#${item.toLowerCase()}`}
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "16px",
                  padding: "5px 8px",
                  borderRadius: "10px",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "2px 2px 5px white",
                    borderRadius: "10px",
                  },
                }}
              >
                {item}
              </Box>
            </li>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Mobile Nav */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
              bgcolor: "#1e1e1e",
              height: "100%",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
            }}
            role="presentation"
          >
            {/* Close Button */}
            <Box
              display="flex"
              justifyContent="flex-end"
              sx={{ p: 1, borderBottom: "1px solid #333" }}
            >
              <IconButton onClick={toggleDrawer(false)} sx={{ color: "#fff" }}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Nav Links */}
            <List>
              {["Home", "About", "Experience", "Projects"].map((item) => (
                <ListItem
                  button
                  key={item}
                  component="a"
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleDrawer(false)}
                  sx={{
                    transition: "0.3s",
                    "&:hover": {
                      pl: 3, 
                    boxShadow: "2px 2px 5px white",
                    borderRadius: "10px",                            
                    },
                    "&:active": {
                      bgcolor: "rgba(0, 153, 255, 0.25)",
                      transform: "scale(0.97)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      letterSpacing: 1,
                      "&:hover": { color: "#ffcc00" },     
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>


      {/* Hero Section */}
      <Box
        display="flex"
        id="home"
        flexDirection={{ xs: "column-reverse", md: "row" }}
        gap={{ xs: 3, md: 6 }}
        alignItems="center"
      >
        {/* Left */}
        <Box flex={1}>
          <Typography variant="h3" color="red" mb={1}>
            Hi,
          </Typography>
          <Typography variant="h4" mb={1}>
            My Name is {data.hero.name}
          </Typography>
          <Typography variant="h5" mb={1}>
            I am a Passionate
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "yellow", fontWeight: 600, mb: 2 }}
          >
            {data.hero.title}
          </Typography>
          <Typography sx={{ color: "rgb(212,212,212)" }}>
            {data.hero.description}
          </Typography>

          {/* social Links */}
          <Box mt={3} display="flex" gap={2} flexWrap="wrap">
            {data.socialLinks.map((social) => (
              <IconButton
                key={social.icon}
                component="a"
                href={social.href}
                target="_blank"
                sx={{
                  color: "#fff",
                  bgcolor: "rgba(190, 44, 25, 0.1)",
                  "&:hover": {
                    color: "#ffcc00",
                    bgcolor: "rgba(255,204,0,0.2)",
                    transform: "scale(1.2)",
                  },
                  transition: "0.3s",
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {getSocialIcon(social.icon)}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Right */}
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            alt={data.hero.name}
            src={profileImg}
            sx={{
              width: { xs: 200, sm: 250, md: 350 },
              height: { xs: 200, sm: 250, md: 350 },
              borderRadius: "50%",
              boxShadow: "0px 0px 20px yellow",
              transition: "0.5s",
              "&:hover": { boxShadow: "0px 0px 30px green" },
            }}
          />

        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "2px",
          bgcolor: "#9c97f1",
          my: 4,
        }}
      />

      {/* About Part */}
      <Box
        id="about"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={4}
        sx={{
          bgcolor: "#1e1e1e",
          p: 4,
          borderRadius: 3,
          boxShadow: "0px 0px 15px rgba(0,0,0,0.5)",
        }}
      >
        {/* left — Photo */}
        <Box flex={1} display="flex" justifyContent="center">
          <Avatar
            src={profileImg}
            alt="Profile"
            sx={{
              width: { xs: 220, md: 300 },
              height: { xs: 320, md: 400 },
              borderRadius: "20px",
              boxShadow: "0px 0px 25px rgba(223, 52, 0, 0.4)",
            }}
          />
        </Box>

        {/* right — Text Content */}
        <Box flex={2} sx={{ color: "#ddd" }}>
          <Typography variant="h4" mb={2} sx={{
            fontWeight: 700, color: "#f83411ff", 
            textShadow: "2px 2px 8px rgba(141, 39, 39, 0.6)",
          }}>
            About Me
          </Typography>

          {data.about.paragraphs.map((p, idx) => (
            <Typography
              key={idx}
              sx={{
                mb: 2,
                lineHeight: 1.7,
                fontSize: "16px",
              }}
            >
              {p}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Skills Part */}
      <Box id="skills">
        <Typography
          variant="h4"
          mb={3}
          sx={{
            fontWeight: 600,

            letterSpacing: 2,
            color: "#ffffffff", 
            textShadow: "2px 2px 8px rgba(41, 40, 40, 0.6)", 
          }}
        >
          Skills & Languages
        </Typography>
        <Grid container spacing={2}>
          {data.languages.map((lang, idx) => (
            <Grid item key={idx}>
              <Chip
                label={lang.name}
                avatar={<Avatar alt={lang.name} src={lang.img} />}
                sx={{
                  bgcolor: "#2c313bff",
                  color: "#fff",
                  minWidth: 180,
                  fontWeight: 500,

                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience part */}
      <Box
        id="experience"
        sx={{
          mt: 10,
          pb: 10,
          px: { xs: 2, md: 5 }, 
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: "center",
            letterSpacing: 2,
            color: "#f4fcffff", 
            textShadow: "2px 2px 8px rgba(3, 2, 2, 0.5)",
          }}
        >
          Experience
        </Typography>

        {/* Top Horizontal Line */}
        <Box
          sx={{
            width: "100%",
            height: "2px",
            bgcolor: "rgba(255,204,0,0.5)", 
            mb: 8,
          }}
        />

        {/* Timeline Boxes */}
        <Grid
          container
          spacing={4}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {data.experience.map((exp, idx) => (
            <Box
              key={idx}
              sx={{
                textAlign: "left",
                position: "relative",
                px: 2,
                py: 3,
                bgcolor: "#1e1e1e",
                borderRadius: 3,
                boxShadow: "0px 5px 15px rgba(0,0,0,0.5)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 10px 25px rgba(255,204,0,0.5)",
                },
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: "-32px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "2px",
                  height: "34px",
                  bgcolor: "rgba(248, 248, 248, 0.7)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#f5c011ff",
                }}
              >
                {exp.role}
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#00ffff", 
                  mb: 1,
                }}
              >
                ({exp.period})
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.8)",
                  mb: 2,
                }}
              >
                {exp.description}
              </Typography>

              {/* Skills */}
              <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                {exp.skills.map((skill, idx2) => (
                  <Chip
                    key={idx2}
                    label={skill}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(175, 173, 173, 0.5)",
                      color: "#ffffffff",
                      fontWeight: 500,
                      borderRadius: "6px",
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "rgba(32, 51, 116, 0.3)",
                        color: "#edf1f5ff",
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>


      {/* Projects Part */}
      <Box id="projects" sx={{ mt: 10 }}>
        <Typography
          variant="h4"
          mb={4}
          sx={{
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 1,
          }}
        >
          Projects
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {data.projects.map((proj, idx) => (
            <Box
              key={idx}
              sx={{
                borderRadius: 3,
                
                overflow: "hidden",
                bgcolor: "#2b2b2b",

                border: "1px solid rgba(255,255,255,0.12)",
                transition: "0.35s",
                cursor: "pointer",
                boxShadow: "0 0 20px rgba(0,0,0,0.4)",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 35px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.3)",
                },
              }}
            >
              {/* image Section */}
              <Box
                sx={{
                  width: "100%",
                  height: 150,
                  overflow: "hidden",
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.5s",
                    
                  }}
                  className="proj-img"
                />
              </Box>

              {/* Content */}
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontSize: "18px", 
                  }}
                >
                  {proj.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#ccc",
                    lineHeight: 1.4,
                    mb: 2,
                    overflow: "hidden",
                  }}
                >
                  {proj.description}
                </Typography>

                {/*  tech */}
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {(proj.tech || proj.skills).map((tech, idx2) => (
                    <Chip
                      key={idx2}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.1)",
                        borderRadius: "5px",
                        fontSize: "11px",
                        color: "#fff",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>

    </Stack>
  );
};

export default Portfolio;
