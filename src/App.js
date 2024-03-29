import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Feed,
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
          <Route path="/video/:id"  element={<VideoDetails />} />
          <Route path="/channel/:id"  element={<ChannelDetails />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
