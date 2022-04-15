import * as React from "react";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

export default React.memo(function ActiveDevices(props) {
  console.log("DeviceCircles");
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: 0,
        width: " 100%",
        display: "grid",
        gridTemplateColumns: "50px",
        gridTemplateRows: "50px",
        placeContent: "center",
        borderRadius: "50%",
      }}
    >
      {[...Array(props.activeDevices)].map((_, index) => (
        <React.Fragment key={index}>
          <Box
            sx={{
              gridArea: "1/1",
              lineHeight: "30px",
              textAlign: "center",
              borderRadius: "50%",
              background: grey["50"],
              animation: "spin 25s linear infinite",
              transform: "rotate(0) translate(150px) rotate(0)",
              "@keyframes spin": {
                "100%": {
                  transform: "rotate(1turn) translate(150px) rotate(-1turn)",
                },
              },
              [`&:nth-of-type(${index + 1})`]: {
                animationDelay: `calc(-${index + 1} * ${index + 1}s / ${
                  index + 1
                })`,
              },
            }}
          ></Box>
        </React.Fragment>
      ))}
    </Box>
  );
});
