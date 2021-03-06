import React from 'react';
import {createStyles, Grow, makeStyles, Theme, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        _title: {
            fontWeight: 700,
            fontFamily: `Raleway, 'sans-serif'`,
            letterSpacing: 10,
        }
    })
)

interface Crash {
    error: Error | undefined;
}

export default ({error}: Crash) => {
    const classes = useStyles();
    return (
        <div>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Grow in={Boolean(error)}><Typography variant='h4' className={classes._title}>
                    OH GOD OH FUCK
                    <br/>
                    {error}
                </Typography></Grow>
            </div>
        </div>
    );
};
