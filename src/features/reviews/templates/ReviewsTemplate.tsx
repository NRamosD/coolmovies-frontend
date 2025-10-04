import { css } from "@emotion/react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Grid2,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

import { memo } from "react";
import { useRouter } from "next/navigation";
import MovieComponent from "../components/MovieComponent";

const primary = "#E50914";

const ReviewsTemplate = () => {
  const router = useRouter();
  return (
    <div css={styles.root}>
        <Paper elevation={3} css={styles.navBar}>
          <IconButton onClick={() => router.back()}>
            <ArrowBackIcon />
          </IconButton>
          <Typography>{'Reviews Page'}</Typography>
        </Paper>
        <Grid2 size={12} container justifyContent="center" 
        sx={{ width: "100%", height: "20%" }} paddingX={2}>
          <Typography css={styles.headPage}>{'Movies Reviews'}</Typography>
          <Typography variant="body1" textAlign="center" sx={{ color: "white" }}>
            {'Here you can find reviews of movies to know if you want to watch them or not'}
          </Typography>
        </Grid2>
        <Grid2 size={12} container spacing={2}
        paddingY={1} paddingX={2} sx={{ width: "100%", height: "100%" }}>
          <Grid2 size={12} container spacing={2} justifyContent="center"
          paddingY={2} paddingX={2}>
            <Grid2
              size={8}
              container
              spacing={2}
              padding={2}
              overflow="auto"
              justifyContent="center"
              height={500}
              sx={styles.contentScroll}
            >
              {
                Array.from({ length: 10 }).map((_, index) => (
                  <MovieComponent key={index} id="" title="" />
                ))
              }
            </Grid2>
          </Grid2>
        </Grid2>
    </div>
  );
};

const styles = {
  root: css({
    height: "100vh",
    maxHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#221F1F",
  }),
  navBar: css({
    background: primary,
    height: 50,
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    padding: 16,
    borderRadius: 0,
    p: {
      color: "white",
    },
  }),
  body: css({
    alignSelf: "stretch",
    padding: 32,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  headPage: css({ marginTop: 2, width: "100%",
    fontSize: "3rem", textAlign: "center", 
    fontWeight: 600, color: "white" }),
  heading: css({ marginTop: 16, fontSize: "2.75rem", textAlign: "center" }),
  subHeading: css({
    margin: "16px 0",
    fontSize: "1.25rem",
    textAlign: "center",
  }),
  subtitle: css({
    fontWeight: 300,
    textAlign: "center",
    maxWidth: 600,
    margin: "24px 0",
    color: "rgba(0, 0, 0, 0.6)",
  }),
  mainControls: css({
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignItems: "center",
  }),
  dataInput: css({
    alignSelf: "stretch",
    margin: "32px 0",
  }),
  contentScroll: {
    width: "100%",
    scrollbarWidth: 'thin',
    scrollbarColor: '#555 transparent',
    '&::-webkit-scrollbar': { width: 8, height: 8 },
    '&::-webkit-scrollbar-track': { backgroundColor: '#1a1a1a', borderRadius: 8 },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#555',
      borderRadius: 8,
      border: '2px solid #1a1a1a',
    },
    '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#777' },
  }
};

export default memo(ReviewsTemplate);
