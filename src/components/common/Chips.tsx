import Chip from "@mui/material/Chip/Chip";
import { Stack } from "@mui/system";

interface ChipsProps {
  chips: string[];
}

export default function Chips({ chips }: ChipsProps) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={1}
      useFlexGap
      sx={{
        color: "text.secondary",
      }}
    >
      {chips.map((chips, index) => (
        <Chip key={index} label={chips} />
      ))}
    </Stack>
  );
}
