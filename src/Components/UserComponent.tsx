import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardComponent from "./CardComponent";
import { getUsersRequested } from "../Redux/actions/users";
import getApi from "../api/userApi";

const UserComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);
  const loading = useSelector((state: any) => state.users.loading);
  const errors = useSelector((state: any) => state.users.error);

  useEffect(() => {
    dispatch(getUsersRequested());
  }, []);

  console.log("user component", users);
  return (
    <>
      {/* <h1>Hello</h1>
      {users.users.map((user: any) => {
        return <CardComponent user={user} key={user.id} />;
      })} */}
      {users.loading && <p>Loading...</p>}
      {users.users.length > 0 &&
        users.users.map((user: any) => {
          return <CardComponent user={user} key={user.id} />;
        })}
      {users.length === 0 && !loading && <p>No users Available</p>}
      {errors && !loading && <p>{errors}</p>}
    </>
  );
};

export default UserComponent;
