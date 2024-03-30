import { Box, Chip, Stack, Typography } from "@mui/material";
import { courses } from "../../data/courses";

export default function Skills() {
  return (
    <Box>
      <Typography gutterBottom component="h3" variant="h6">
        Courses
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
        {courses.map((course, index) => (
          <Chip key={index} label={course} />
        ))}
      </Stack>
    </Box>
  );
}
