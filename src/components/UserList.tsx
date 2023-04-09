import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../utils/colors";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { init, randomImgForUser } from "../features/userSlice";
import { CardItem } from "./CardItem";
import { Backdrop, CircularProgress } from "@mui/material";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  listContainer: {
    width: "100%",
    height: "88vh",
    display: "flex",
  },
  backdrop: {
    color: colors.WHITE,
     zIndex: 10
  }
});

export const UserList = () => {
  const { loading, loadingNewImg, error, users } = useAppSelector(
    (state) => state.users
  );
  const { selectedUser } = useAppSelector((state) => state.selectedUser);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(init());
  }, []);

  useEffect(() => {
    if (selectedUser) {
      dispatch(randomImgForUser(selectedUser.userId));
    }
  }, [selectedUser]);

  return (
    <Grid container  className={classes.listContainer} >
      {loading || !users?.length ? (
        <Backdrop
            className={classes.backdrop}
            open={loading}
        >
            <CircularProgress color="secondary" />
        </Backdrop>
      ) : (
        users.map((user) => (
          <Grid item key={user.userId} xs={12} sm={3} md={3} lg={3} xl={3}>
            <CardItem user={user} />
          </Grid>
        ))
      )}
    </Grid>
  );
};
