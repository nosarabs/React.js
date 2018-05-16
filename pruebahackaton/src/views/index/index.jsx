import React from "react"
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";

import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Settings from "@material-ui/icons/Settings";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";




class Index extends React.Component {

    render() {
        const { classes } = this.props;
        return (
        <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.title}>
                <h3>Menu with Icons</h3>
                        </div>
                    <Header
                        brand="Icons"
                        color="info"
                        rightLinks={
                            <List className={classes.list}>
                                <ListItem className={classes.listItem}>
                                    <Button color="transparent" className={classes.navLink}>
                                        <Email className={classes.icons} />
                                    </Button>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <Button color="transparent" className={classes.navLink}>
                                        <Face className={classes.icons} />
                                    </Button>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <CustomDropdown
                                        left
                                        dropdownHeader="Dropdown Header"
                                        buttonIcon={Settings}
                                        buttonProps={{
                                            className: classes.navLink,
                                            color: "transparent"
                                        }}
                                        dropdownList={[
                                            "Action",
                                            "Another action",
                                            "Something else here",
                                            { divider: true },
                                            "Separated link",
                                            { divider: true },
                                            "One more separated link"
                                        ]}
                                    />
                                </ListItem>
                            </List>
                        }
                    />
                </GridItem>
            </GridContainer>


        );


    }
}

export default Index;
