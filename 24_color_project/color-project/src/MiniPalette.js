import React from "react";
import { withStyles } from "@material-ui/styles";

// set of classes with sass structured styles - camelCase and values should be in ""
const styles = {
    main: {
        backgroundColor: "purple",
        border: "3px solid teal"
    },
    secondary: {
        backgroundColor: "pink",
        "& h1": {
            color: "white",
            "& span": {
                backgroundColor: "yellow"
            }
        }
    }
};

function MiniPalette(props) {
    const { classes } = props;
    console.log(classes);

    return (
        <div className={classes.main}>
            <h1>Mini Palette</h1>
            <section className={classes.secondary}>
                <h1>
                    Mini Palette <span>ajskhd</span>
                </h1>
                <span>ajskhd</span>
            </section>
        </div>
    );
}

// Higher Order component - that wraps the component with withStyles and creates a new component
export default withStyles(styles)(MiniPalette);