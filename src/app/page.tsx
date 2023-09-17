"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import IntroSection from "@/components/Sections/IntroSection";
import AboutSection from "@/components/Sections/AboutSection";
import ContactSection from "@/components/Sections/ContactSection";

export default function HomePage() {
  const SECTIONS = [
    { id: "Intro", element: <IntroSection />, ref: React.useRef(null) },
    { id: "About", element: <AboutSection />, ref: React.useRef(null) },
    { id: "Contact", element: <ContactSection />, ref: React.useRef(null) }
  ];

  return (
    <Box display="flex" flexDirection="column">
      {SECTIONS.map((section) => (
        <Grid key={section.id} xs={12} className="section" ref={section.ref}>
          {section.element}
        </Grid>
      ))}
    </Box>
  );
}
