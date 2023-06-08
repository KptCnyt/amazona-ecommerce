import React from "react";
import Head from "next/head";
import NextLink from "next/link";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import useStyles from "../utils/styles";

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona` : "Next Amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              
                <Typography className={classes.brand}>amazona</Typography>
              
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                Cart
              </NextLink>
              <NextLink href="/login" passHref>
                Login
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Next Amazona.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
