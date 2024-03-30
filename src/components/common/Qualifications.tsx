import { Box, Chip, Stack, Typography } from "@mui/material";
import { qualifications } from "../../data/qualifications";

export default function Qualifications() {
  return (
    <Box>
      <Typography gutterBottom component="h3" variant="h6">
        Qualifications
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={1}
        useFlexGap
        sx={{
          color: "text.secondary",
        }}
      >
        {qualifications.map((qualification, index) => (
          <Chip key={index} label={qualification} />
        ))}
      </Stack>
    </Box>
  );
}
