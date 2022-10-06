import React, { useState } from "react";
import Styles from "./profile.module.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import profilePic from "../../public/profilePic.png";
import Image from "next/Image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";

export default function ProfilePage() {
  const [data, setdata] = useState({
    Name: "Agent Carter",
    interactions: [
      {
        posts: "150",
        followers: "32k",
        following: "10",
      },
      {
        posts: "280",
        followers: "55k",
        following: "7",
      },
    ],
  });
  return (
    <>
      <Grid
        className={Styles.container}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid className={Styles.left} item xs={4} md={4} lg={4}>
          <Item>
            <div className={Styles.profilePic}>
            <Grid
                  className={Styles.uploadDP}
                  variant="outlined"
                  component="label"
                  sx={{ border:"none"}}
                >
                  <Image
                    src={profilePic}
                    className={Styles.profilePicture}
                    // layout="fill"
                    alt={"dp"}
                  />
                  <input type="file" hidden />
                </Grid>
            </div>
          </Item>
        </Grid>
        <Grid className={Styles.right} item xs={8} md={8} lg={8}>
          <Item>
            <Typography className={Styles.heading} variant="h4">
              {data.Name}
            </Typography>
          </Item>
          <Item>
            <Typography className={Styles.subText} variant="p">
              {data.interactions[0].posts} Posts
            </Typography>
            <Typography className={Styles.subText} variant="p">
              {data.interactions[0].followers} Followers
            </Typography>
            <Typography className={Styles.subText} variant="p">
              {data.interactions[0].following} Following
            </Typography>
          </Item>
          <Item>
            <Typography className={Styles.subText} variant="6">
              Captain America the First Avenger
            </Typography>
          </Item>
          <Item>
            <Typography className={Styles.subText} variant="6">
              US Army Officer
            </Typography>
          </Item>
          <Item>
            <Typography className={Styles.subText} variant="6">
              Fighting for Country
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Grid
        className={Styles.containerStories}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid className={Styles.stories}>
          <Avatar
            className={Styles.storiesPic}
            alt="Peggy Carter"
            src="Peggy_Carter.jpg"
          />
        </Grid>
        <Grid className={Styles.stories}>
          <Avatar
            className={Styles.storiesPic}
            alt="Peggy Carter"
            src="Peggy_Carter2.jpg"
          />
        </Grid>
        <Grid className={Styles.stories}>
          <Avatar
            className={Styles.storiesPic}
            alt="Peggy Carter"
            src="Peggy_Carter3.jpg"
          />
        </Grid>
        <Grid className={Styles.stories}>
          <Avatar
            className={Styles.storiesPic}
            alt="Peggy Carter"
            src="Peggy_Carter4.webp"
          />
        </Grid>
      </Grid>
      <Grid
        className={Styles.containerButtons}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Button className={Styles.buttons}>Posts</Button>
        <Button className={Styles.buttons}>Videos</Button>
        <Button className={Styles.buttons}>Reels</Button>
        <Button className={Styles.buttons}>Guides</Button>
      </Grid>
    </>
  );
}
