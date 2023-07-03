import DashboardBox from "@/components/DashboardBox";
import { useTheme, Box, useMediaQuery } from "@mui/material";
import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

type Props = {};

const Dashboard = (props: Props) => {
  const { palette } = useTheme();
  const isAboveMediumScreens = useMediaQuery("(min-width:1200px)");
  const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
    "g h j"
    `;
  const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "j"
    "j"
  `;
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"grid"}
      gap={"1rem"}
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
    <Row1/>
    <Row2/>
    <Row3/>
    {/* <DashboardBox gridArea={"a"}></DashboardBox> */}
    </Box>
  );
};

export default Dashboard;
