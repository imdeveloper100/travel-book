import React, { useState } from "react";
import Styles from "./profile.module.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import profilePic from "../../public/profilePic.png";
import Image from "next/Image";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CommentIcon from '@mui/icons-material/Comment';

export default function ProfilePage() {
  const userData = [
    {
      user: [
        {
          title: "Kaghan",
          description:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels",
        },
        {
          title: "Kashmir",
          description:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels",
        },
        {
          title: "Gilgit",
          description:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels",
        },
        {
          title: "Swat",
          description:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels",
        },
        {
          title: "Kumrat",
          description:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels",
        },
      ],
    },
  ];

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
                sx={{ border: "none" }}
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
      <Grid container spacing={2}>
      <Grid className={Styles.cardGrid} item xs={12} sm={6} md={4} lg={3} xl={2}>
          {userData.map((data, i) => (
            <Item key={i} className={Styles.cardItem}>
              <Card className={Styles.card} sx={{ maxWidth: 350 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="user"
                      alt="Agent Carter"
                      src="/Peggy_Carter.jpg"
                    />
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    sx={{ mb: "2px" }}
                  >
                    {data.user[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.user[0].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button variant="contained"> View Post </Button>
                </CardActions>
              </Card>
            </Item>
          ))}
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} sm={6} md={4} lg={3} xl={2}>
          {userData.map((data, i) => (
            <Item key={i} className={Styles.cardItem}>
              <Card className={Styles.card} sx={{ maxWidth: 350 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="user"
                      alt="Agent Carter"
                      src="/Peggy_Carter.jpg"
                    />
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    sx={{ mb: "2px" }}
                  >
                    {data.user[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.user[0].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button variant="contained"> View Post </Button>
                </CardActions>
              </Card>
            </Item>
          ))}
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} sm={6} md={4} lg={3} xl={2}>
          {userData.map((data, i) => (
            <Item key={i} className={Styles.cardItem}>
              <Card className={Styles.card} sx={{ maxWidth: 350 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="user"
                      alt="Agent Carter"
                      src="/Peggy_Carter.jpg"
                    />
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    sx={{ mb: "2px" }}
                  >
                    {data.user[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.user[0].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button variant="contained"> View Post </Button>
                </CardActions>
              </Card>
            </Item>
          ))}
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} sm={6} md={4} lg={3} xl={2}>
          {userData.map((data, i) => (
            <Item key={i} className={Styles.cardItem}>
              <Card className={Styles.card} sx={{ maxWidth: 350 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="user"
                      alt="Agent Carter"
                      src="/Peggy_Carter.jpg"
                    />
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    sx={{ mb: "2px" }}
                  >
                    {data.user[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.user[0].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button variant="contained"> View Post </Button>
                </CardActions>
              </Card>
            </Item>
          ))}
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} sm={6} md={4} lg={3} xl={2}>
          {userData.map((data, i) => (
            <Item key={i} className={Styles.cardItem}>
              <Card className={Styles.card} sx={{ maxWidth: 350 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="user"
                      alt="Agent Carter"
                      src="/Peggy_Carter.jpg"
                    />
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    sx={{ mb: "2px" }}
                  >
                    {data.user[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.user[0].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button variant="contained"> View Post </Button>
                </CardActions>
              </Card>
            </Item>
          ))}
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} sm={6} md={4} lg={3} xl={2}>
          {userData.map((data, i) => (
            <Item key={i} className={Styles.cardItem}>
              <Card className={Styles.card} sx={{ maxWidth: 350 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="user"
                      alt="Agent Carter"
                      src="/Peggy_Carter.jpg"
                    />
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    sx={{ mb: "2px" }}
                  >
                    {data.user[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.user[0].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button variant="contained"> View Post </Button>
                </CardActions>
              </Card>
            </Item>
          ))}
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} sm={6} md={4} lg={3} xl={2}>
          {userData.map((data, i) => (
            <Item key={i} className={Styles.cardItem}>
              <Card className={Styles.card} sx={{ maxWidth: 350 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="user"
                      alt="Agent Carter"
                      src="/Peggy_Carter.jpg"
                    />
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="text.primary"
                    sx={{ mb: "2px" }}
                  >
                    {data.user[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.user[0].description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button variant="contained"> View Post </Button>
                </CardActions>
              </Card>
            </Item>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
