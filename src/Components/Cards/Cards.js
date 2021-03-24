import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import './Cards.module.css'

function Cards({data:{confirmed, recovered, deaths, lastUpdate}}) {
   console.log(confirmed)
   console.log(recovered)

    
   

    return (
        <div>
            <div className='container'>
              <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>INFECTED</Typography>
                <Typography variant="h5">{confirmed.value}</Typography>
                <Typography color="textSecondary"></Typography>
                <Typography variant="body2">no of active cases of Covid 19</Typography>
                </CardContent>
                </Grid>
              
              
              
                <Grid item component={Card}>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>RECOVERED</Typography>
                <Typography variant="h5">{recovered.value}</Typography>
                <Typography color="textSecondary"></Typography>
                <Typography variant="body2">no of recovered cases of Covid 19</Typography>
                </CardContent>
                </Grid>
              
                <Grid item component={Card}>
                <CardContent>
                <Typography color="textSecondary" gutterBottom></Typography>
                <Typography variant="h5">Real data</Typography>
                <Typography color="textSecondary">date</Typography>
                <Typography variant="body2">no of deaths  Caused by Covid 19</Typography>
                </CardContent>
                </Grid>
                </Grid>



            </div>
        </div>
    )
}

export default Cards;
