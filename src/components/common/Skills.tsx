import { Box, Chip, Stack, Typography } from "@mui/material";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <Box>
      <Typography gutterBottom component="h3" variant="h6">
        My Skills
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
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} />
        ))}
      </Stack>
    </Box>
  );
}
