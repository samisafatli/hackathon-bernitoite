import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import categories from '../data/categories'
import Button from './Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const DeliveryCard = ({delivery, handleDelete, profile}) =>  {
  const classes = useStyles();
  const category = categories.find(c => c.value === delivery.categoryIdx)



  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
                <Avatar>{categories.find(c => c.value === delivery.categoryIdx).name[0]}</Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                {profile && 
                <Typography gutterBottom variant="subtitle1">
                  Código: {delivery._id}
                </Typography>
                }
                <Typography gutterBottom variant="subtitle1">
                  Categoria: {category.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Origem: {delivery.origin.description}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Destino: {delivery.destiny.description}
                </Typography>
              </Grid>
              <Grid item>
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                  {profile && <Button onClick={() => handleDelete(delivery._id)} text="Remove"/ >}
                  <Button fullWidth={!profile?true:false} link={`chat/${delivery._id}`} text="Chat">
                  </Button>
                  </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default DeliveryCard