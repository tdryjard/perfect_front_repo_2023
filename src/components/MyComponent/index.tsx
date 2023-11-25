// components/MyComponent.tsx
import React, { useEffect } from "react";
import { useGetUserQuery } from "@/services/user.services";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import { UserCard } from "./style";
import { List } from "@/styles/global";

const MyComponent = () => {
  const { data: user, isSuccess } = useGetUserQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  return (
    <List>
      <UserCard isUserGet={isSuccess}>{user?.name || "no user"}</UserCard>
    </List>
  );
};

export default MyComponent;
