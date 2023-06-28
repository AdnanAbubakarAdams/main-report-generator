import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = ({ loading }) => {
  return (
    <div>
      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        false
      )}
    </div>
  );
}

export default Loading;