import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton, Stack } from "@mui/material";
import { useLinks } from "../../hooks/links";
import DownloadIcon from "@mui/icons-material/Download";

export default function Socials() {
  const { openUrl, openUrlInNewTab, openMailUrl } = useLinks();

  const linkedInUrl = "https://www.linkedin.com/in/cameron-fuller-455052141/";
  const email = "cameron-fuller@hotmail.com";
  const whatsappUrl = "https://wa.me/+447539250603";

  function handleDownload() {
    const link = document.createElement("a");
    link.href = require("../../assets/cameron-fuller-cv.pdf");
    link.download = "cameron-fuller-cv.pdf";
    link.click();
  }

  return (
    <Stack
      direction="row"
      justifyContent="left"
      spacing={1}
      useFlexGap
      sx={{
        color: "text.secondary",
      }}
    >
      <IconButton aria-label="LinkedIn"  onClick={() => openUrlInNewTab(linkedInUrl)}>
        <LinkedInIcon />
      </IconButton>
      <IconButton aria-label="Email"  onClick={() => openMailUrl(email)}>
        <EmailIcon />
      </IconButton>
      <IconButton aria-label="Whatsapp" onClick={() => openUrl(whatsappUrl)}>
        <WhatsAppIcon />
      </IconButton>
      <IconButton aria-label="Download my CV" onClick={handleDownload}>
        <DownloadIcon />
      </IconButton>
    </Stack>
  );
}
