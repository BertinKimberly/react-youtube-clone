import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {
  Feed,
  Channel,
  ChannelDetails,
  VideoDetails,
  Navbar,
} from "./components";

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetails />} />
          <Route path="/channel/:id" exact element={<ChannelDetails />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
