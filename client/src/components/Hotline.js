import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  hotline: {
    textAlign: "center",
  },
});

function Hotline() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.hotline}>
      <div className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Help is available
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Speak with a counselor today
          </Typography>
          <br />
          <Typography variant="h5" component="p">
            National Suicide Prevention Lifeline
          </Typography>
          <Typography variant="h4" component="p">
            <a
              href="tel:1-800-273-8255"
              className="contact-number  contact-number--banner"
            >
              1-800-273-8255
            </a>
          </Typography>
          <Link
            href="https://suicidepreventionlifeline.org/"
            size="small"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website
          </Link>
        </CardContent>
      </div>
    </div>
  );
}

export default Hotline;
