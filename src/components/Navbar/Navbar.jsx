import React from 'react';
import {NavLink} from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    MenuItem,
    Menu,
    Typography
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import logo from "../../assets/logo.png"
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position={'fixed'} className={classes.appBar} color={'inherit'}>
                <Toolbar>
                        <Typography variant={'h6'} className={classes.title}>
                            <NavLink to={'/'}>
                            <img src={logo} alt={'commerse.js'} height={'25px'} className={classes.image}/>
                            </NavLink>
                            SNYS
                        </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <NavLink to={'/cart'}>
                            <IconButton aria-label={'Show cart items'} color={'inherit'} component={NavLink} to={'/cart'}>
                                <Badge badgeContent={totalItems} color={'secondary'}>
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;