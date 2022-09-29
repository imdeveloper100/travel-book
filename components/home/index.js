import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Styles from "./home.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";

export default function HomePage() {
  const [peopleFieldState, setPeopleFieldState] = React.useState("");
  const [placesFieldState, setPlacesFieldState] = React.useState("");
  return (
    <>
      <Grid className={Styles.container} id="topmost-container">
        <Grid className={Styles.gridContainer}>
          <Grid item lg={2} md={6} xs={12} sx={{ m: "10px auto" }}>
            <Typography variant="h6" component="p" className={Styles.heading}>
              Travel all over{" "}
              <span className={Styles.headingLast}>the world</span>
            </Typography>
          </Grid>

          <Grid
            className={Styles.searches}
            id="form-grid-container"
            container
            justifyContent="center"
          >
            <Grid item lg={4} md={4} s={12} xs={12} className={Styles.grid}>
              <SearchOutlinedIcon className={Styles.icons} />
              <input
                name="people"
                label="people"
                id="search-field"
                type="text"
                placeholder="Search for people..."
                value={peopleFieldState}
                onChange={(event) => {
                  setPeopleFieldState(event.target.value);
                }}
                aria-describedby="search-field-helper-text"
              />
            </Grid>
            <Grid item lg={4} md={4} s={12} xs={12} className={Styles.grid}>
              <LocationSearchingOutlinedIcon className={Styles.icons} />
              <input
                name="Places"
                label="Places"
                id="search-field"
                placeholder="Places..."
                value={placesFieldState}
                onChange={(event) => {
                  setPlacesFieldState(event.target.value);
                }}
                aria-describedby="search-field-helper-text"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
