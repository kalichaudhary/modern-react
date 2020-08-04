import React, { Component } from "react";
// import { Link } from "react-router-dom";

import MiniPalette from "./MiniPalette";

import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)", // 3 grid items with 30% width
        gridGap: "5%" // 5% gap b/w the grid items
    }
};

class PaletteList extends Component {
    goToPalette(id) {
        // this.props.history will be available via routeProps from App.js
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const { classes, palettes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            // Not a standard practice to wrap entire box with Link
                            // <Link to={`palette/${palette.id}`}>
                            <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} />
                            // </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(PaletteList);