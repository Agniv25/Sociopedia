import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Skeleton,
} from "@mui/material";
import Form from "./Form.jsx";
// import Skeleton from "react-loading-skeleton";
// import { Box,Typography, } from "@mui/material";
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileResponsive = useMediaQuery("(min-width:1000px)");

  return (
    <>
      <Box>
        <Box
          width="100%"
          backgroundColor={theme.palette.background.alt}
          p="1rem 6%"
          textAlign="center"
        >
          <Typography fontWeight="bold" fontSize="32px" color="primary">
            Sociopedia
          </Typography>
        </Box>
        <Box
          width={isNonMobileResponsive ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
            Welcome to Sociopedia , the Social Media for Sociopath
          </Typography>
          <Form />

          {/* <Form /> */}
        </Box>
      </Box>

      {/* Set width to test */}
    </>
  );
};
export default LoginPage;
