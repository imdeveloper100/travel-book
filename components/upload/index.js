import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextareaAutosize } from "@mui/material";
import axios from "axios";

import Styles from "./upload.module.css";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [descrition, setDecription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title,
      descrition,
    };

    axios
      .post("http://localhost:3000/api/signup", { data })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Grid
        sx={{
          marginTop: 6,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          sx={{ textAlign: "center", mb: "12px" }}
        >
          Where did you visit?
        </Typography>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <form onSubmit={(e) => handleSubmit(e)} sx={{ m: "0px auto" }}>
          <Grid
            className={Styles.inputGrid}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{ ml: 1 }}
          >
            <Item>
              <TextField
                onChange={(e) => setTitle(e.target.value)}
                maxRows={4}
                value={title}
                margin="normal"
                required
                fullWidth
                id="title"
                label="Name of place you visited"
                name="title"
                size="small"
                autoComplete="title"
                autoFocus
              />
            </Item>
            <Item>
              <TextareaAutosize
                className={Styles.textArea}
                maxRows={4}
                aria-label="maximum height"
                placeholder="Short decription about your experience there"
                onChange={(e) => setDecription(e.target.value)}
                style={{ width: "100%", height: "100px" }}
              />
            </Item>

            <Item sx={{ alignItems: "baseLine" }}>
              <Button
                className={Styles.uploadBtn}
                variant="outlined"
                component="label"
                sx={{ mr: 2 }}
              >
                Upload images
                <input type="file" hidden />
              </Button>
              <Button type="submit" fullWidth variant="contained">
                Submit to Post
              </Button>
            </Item>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
