import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function TodoList() {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [todoText, setTodoText] = useState([]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <form
        className="col-md-8 offset-md-2"
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e)=>e.preventDefault()}
      >
        <TextField
          id="standard-name"
          label="Name"
          value={input}
          onChange={e => setInput(e.target.value)}
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setTodoText([...todoText, input]);
          }}
        >
          Add
        </Button>
      </form>

      {todoText.map((val, inx) => {
        return (
          <List
            subheader={<ListSubheader>{inx}</ListSubheader>}
            className={classes.root}
          >
            <ListItem>
              <ListItemIcon>
                <LoyaltyIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-bluetooth" primary={val} />

              <ListItemSecondaryAction>
                <EditIcon
                  onClick={() => {
                    var a = prompt("Enter new Value", todoText[inx]);
                    todoText.map((val, inx1) => {
                      if (inx === inx1) {
                        todoText[inx1] = a;
                      }
                      return true;
                    });

                    setTodoText([...todoText]);
                  }}
                />
                <CloseIcon
                  onClick={() => {
                    const arr = todoText.filter((val, inx1) => {
                      return inx1 !== inx;
                    });
                    setTodoText(arr);
                  }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        );
      })}
    </div>
  );
}
