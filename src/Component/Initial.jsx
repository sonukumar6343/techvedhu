import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";


import img from "../assets/Group 89.png";
import WorkIcon from "../assets/Business Time.png";
import SchoolIcon from "../assets/Graduation Cap.png";
import LiveTvIcon from "../assets/Teacher.png";
import VerifiedUserIcon from "../assets/Development Skill.png";
import SupportAgentIcon from "../assets/Service.png";
import AssessmentIcon from "../assets/Inspection.png";
import img1 from "../assets/Group 38.png";
import img2 from "../assets/Group 37.png";
import CognizantLogo from "../assets/Cognizant-Logo 1.png";
import AccentureLogo from "../assets/Accenture-logo 1.png";
import ZohoLogo from "../assets/Zoho_Corporation-Logo 1.png";
import MicrosoftLogo from "../assets/png-transparent-microsoft-logo-company-microsoft-publisher-text-rectangle-microsoft-removebg-preview 1.png";
import AmazonLogo from "../assets/amazonLogo.png";
import WalmartLogo from "../assets/walmart-logo-11530965898abz7wth9aw-removebg-preview 1.png";

export default function HeroSection() {
  const companyLogos = [
    { src: CognizantLogo, alt: "Cognizant" },
    { src: AccentureLogo, alt: "Accenture" },
    { src: ZohoLogo, alt: "Zoho" },
    { src: MicrosoftLogo, alt: "Microsoft" },
    { src: AmazonLogo, alt: "Amazon" },
    { src: WalmartLogo, alt: "Walmart" },
  ];

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="primary" sx={{ padding: "8px 0" }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              TECH VEDHU
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Internship Program</Button>
              <Button color="inherit">Placement Assurance</Button>
              <Button color="inherit">More</Button>
            </Box>
            <Button variant="contained">
              Login/Signup
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              Learn Just Like You Would be in the Best Tech Companies in India
            </Typography>
            <Typography sx={{ mt: 2, color: "gray" }}>
              Work-experience-based learning personalized way programs to{" "}
              <Box
                component="span"
                sx={{ textDecoration: "underline", color: "blue" }}
              >
                Supercharge your career and land your dream tech job
              </Box>
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <Box component="span" fontWeight="bold">
                Build
              </Box>{" "}
              professional projects with professionals. <br />
              <Box component="span" fontWeight="bold">
                Master
              </Box>{" "}
              the current cutting-edge technologies. <br />
              <Box component="span" fontWeight="bold">
                Crack
              </Box>{" "}
              your dream role at the best tech companies.
            </Typography>

            {/* Buttons */}
            <Box sx={{ mt: 3 }}>
              <Button
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 96 960 960"
                    width="24"
                    fill="currentColor"
                  >
                    <path d="M380 776V376l280 200-280 200Z" />
                  </svg>
                }
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                Upskill with Tech Vedhu
              </Button>
            </Box>

            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
              <Button variant="outlined">Explore Our Programs</Button>
              <Button variant="contained">Book Your Free Trial, Now</Button>
            </Box>
          </Grid>

          {/* Right Content - Image & Stats */}
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={img}
              alt="Tech Student"
              sx={{ width: "100%", maxWidth: 350, borderRadius: "8px" }}
            />
            <Box
              sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 2 }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  boxShadow: 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  10.7k
                </Typography>
                <Typography fontSize="14px" color="gray">
                  Registered
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "white",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  boxShadow: 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  10+
                </Typography>
                <Typography fontSize="14px" color="gray">
                  Languages
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          sx={{ mb: 3 }}
        >
          Why Choose Us
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {[
            { img: LiveTvIcon, text: "Live interactive class" },
            { img: WorkIcon, text: "Gain working experience" },
            { img: SupportAgentIcon, text: "1-1 assistance" },
            { img: VerifiedUserIcon, text: "Expert advise" },
            { img: AssessmentIcon, text: "Mock assessment" },
            { img: SchoolIcon, text: "Placement guaranteed" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 4,
                  boxShadow: 2,
                  borderRadius: 2,
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt="Icon"
                  sx={{ width: 50, height: 50, mb: 2 }}
                />
                <Typography variant="body1" fontWeight="bold">
                  {item.text}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Supercharge Your Career Section */}
      <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          sx={{ mb: 3 }}
        >
          Supercharge your career right away
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            {
              img: img1,
              title: "Internship / Certificate program",
              text: "The intern’s responsibilities, the skills they developed, and an evaluation of their performance.",
            },
            {
              img: img2,
              title: "Placement Guaranteed Program",
              text: "Offline/online program with Placement assistance Guaranteed",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{ display: "flex", alignItems: "center", boxShadow: 2 }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{ width: 120, height: 120, p: 2 }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ my: 1 }}
                  >
                    {item.text}
                  </Typography>
                  <Button variant="contained">Explore now →</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ width: "100vw", minHeight: "30vh", bgcolor: "#F3F6FC", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" color="primary" sx={{ mb: 3 }}>
          Our Learners Work at
        </Typography>

        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {companyLogos.map((company, index) => (
            <Grid item xs={6} sm={4} md={2} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={company.src}
                alt={company.alt}
                sx={{
                  width: { xs: 100, sm: 120, md: 140 },
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </>
  );
}
