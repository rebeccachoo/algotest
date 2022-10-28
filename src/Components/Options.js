import React from "react";
import Box from "@mui/material/Box";

const Options = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "70%",
        pt: 4,
      }}
    >
      <Box>
        <Box className="title">Total lot</Box>
        <Box sx={{ pt: 1 }}>
          <input
            type="number"
            min="1"
            max="5000"
            className="select"
            value={props.lot}
            onChange={(e) => props.setLot(e.target.value)}
          />
        </Box>
      </Box>
      <Box>
        <Box className="title">Position</Box>
        <Box sx={{ pt: 1 }}>
          <select
            className="select"
            value={props.position}
            onChange={(e) => props.setPosition(e.target.value)}
          >
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
        </Box>
      </Box>
      <Box>
        <Box className="title">Option Type</Box>
        <Box sx={{ pt: 1 }}>
          <select className="select">
            <option>Call</option>
            <option>Put</option>
          </select>
        </Box>
      </Box>
      <Box>
        <Box className="title">Expiary</Box>
        <Box sx={{ pt: 1 }}>
          <select className="select">
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </Box>
      </Box>
      <Box>
        <Box className="title">Select Strike Criteria</Box>
        <Box sx={{ pt: 1 }}>
          <select className="select">
            <option>Strike Type</option>
            <option>Premium Range</option>
            <option>Closest Premium</option>
            <option>Straddle Width</option>
          </select>
        </Box>
      </Box>
      <Box>
        <Box className="title">Strike Type</Box>
      </Box>
    </Box>
  );
};

export default Options;
