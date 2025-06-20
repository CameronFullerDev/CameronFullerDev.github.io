import { Paper } from "@mui/material";
import { useInView } from "../../hooks/useInView";

export default function SectionBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, isInView } = useInView();

  return (
    <Paper
      ref={ref}
      elevation={1}
      sx={{
        p: 3,
        width: "100%",
        borderRadius: 2,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0px)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </Paper>
  );
}
