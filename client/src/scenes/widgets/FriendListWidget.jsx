import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    console.log("THe freinds are");
    console.log(data);
    dispatch(setFriends({ friends: data }));
  };
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
    // getUser();
  }, []);

  useEffect(() => {
    getFriends();
    console.log("friend list got updated");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {isLoading && (
        <WidgetWrapper>
          <Skeleton variant="rectangular" sx={{ marginBottom: "2rem" }} />
          <Skeleton variant="rectangular" height={300} />
        </WidgetWrapper>
      )}
      {!isLoading && (
        <WidgetWrapper>
          <Typography
            color={palette.neutral.dark}
            variant="h5"
            fontWeight="500"
            sx={{ mb: "1.5rem" }}
          >
            Friend List
          </Typography>
          <Box display="flex" flexDirection="column" gap="1.5rem">
            {friends &&
              friends.map((friend) => (
                <Friend
                  key={friend._id}
                  friendId={friend._id}
                  name={`${friend.firstName} ${friend.lastName}`}
                  subtitle={friend.occupation}
                  userPicturePath={friend.picturePath}
                />
              ))}
          </Box>
          {console.log(friends)}
        </WidgetWrapper>
      )}
    </>
  );
};

export default FriendListWidget;
