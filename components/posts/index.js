import Grid from "@mui/material/Grid";
import * as React from "react";
import Item from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Styles from "./posts.module.css";
import { Link } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';

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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Main() {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [data, setData] = React.useState();

  const handlePostClick = () => {};
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Item>
          <Typography className={Styles.heading} variant="h3" component="h3">
            Trending Posts
          </Typography>
        </Item>
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
      <Grid container spacing={2}>
        <Item>
          <Typography className={Styles.heading} variant="h3" component="h3">
            Popular Posts of the week
          </Typography>
        </Item>
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
