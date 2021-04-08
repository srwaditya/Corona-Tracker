import React from 'react';
import {Card,CardContent, Typography, Grid} from "@material-ui/core";
import styles from './Cards.module.css';
import  Countup from 'react-countup';
import cx from 'classnames';
const Cards =({data: { confirmed, recovered, deaths, lastUpdate }})=>  {

    if (!confirmed)  {
        return  'Loading...'
    }
    

    return(
      <div className={styles.container}>
      <Grid container spacing={3} justify="center">
          <Grid item component={Card} xs={12} md={3} className={cx(styles.test, styles.infected)}>
              <CardContent>
                  <Typography color="textSecondary" gutterBottom>Infected</Typography>
                  <Typography variant="h5"><Countup start={0} end={confirmed.value} duration={2.5} separator=","></Countup></Typography>
                  <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of Active  Covid-19 Case</Typography>
              </CardContent>

              
          </Grid>


          <Grid item component={Card}xs={12} md={3} className={cx(styles.test, styles.recovered)}>
              <CardContent>
                  <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                  <Typography variant="h5"><Countup start={0} end={recovered.value} duration={2.5} separator=","></Countup></Typography>
                  <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of Recovered  Covid-19 Case</Typography>
              </CardContent>


      </Grid>


      <Grid item component={Card}xs={12} md={3} className={cx(styles.test, styles.deaths)}>
              <CardContent>
                  <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                  <Typography variant="h5"><Countup start={0} end={deaths.value} duration={2.5} separator=","></Countup></Typography>
                  <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                  <Typography variant="body2">Number of Deaths Cause By Covid-19 Case</Typography>
              </CardContent>
      </Grid>
      </Grid>
      </div>
    )
}

export default Cards;