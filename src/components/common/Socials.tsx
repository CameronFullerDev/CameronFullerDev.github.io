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
      <IconButton onClick={() => openUrlInNewTab(linkedInUrl)}>
        <LinkedInIcon aria-label="LinkedIn" />
      </IconButton>
      <IconButton onClick={() => openMailUrl(email)}>
        <EmailIcon aria-label="Email" />
      </IconButton>
      <IconButton onClick={() => openUrl(whatsappUrl)}>
        <WhatsAppIcon aria-label="Whatsapp" />
      </IconButton>
      <IconButton onClick={handleDownload}>
        <DownloadIcon aria-label="Download my CV" />
      </IconButton>
    </Stack>
  );
}
