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
import Styles from "./main.module.css";

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
  const [data, setData] = React.useState();

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
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
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
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
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
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
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
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
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
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
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
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
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
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Item>
          <Typography className={Styles.heading} variant="h3" component="h3">
            Popular Posts of the week
          </Typography>
        </Item>
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    alt="Agent Carter"
                    src="/Peggy_Carter.jpg"
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="/post2.jpg"
                alt="France Tour"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    alt="Agent Carter"
                    src="/Peggy_Carter.jpg"
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="/post2.jpg"
                alt="France Tour"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    alt="Agent Carter"
                    src="/Peggy_Carter.jpg"
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Chorizo"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="/post2.jpg"
                alt="France Tour"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    alt="Agent Carter"
                    src="/Peggy_Carter.jpg"
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="/post2.jpg"
                alt="France Tour"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    alt="Agent Carter"
                    src="/Peggy_Carter.jpg"
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="/post2.jpg"
                alt="France Tour"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>
        <Grid className={Styles.cardGrid} item xs={12} md={4} lg={3}>
          <Item className={Styles.cardItem}>
            <Card className={Styles.card} sx={{ maxWidth: 350 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    alt="Agent Carter"
                    src="/Peggy_Carter.jpg"
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Chorizo"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="/post2.jpg"
                alt="France Tour"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Grid>

      </Grid>
    </>
  );
}
