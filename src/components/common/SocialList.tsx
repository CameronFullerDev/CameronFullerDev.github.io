import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";
import { useLinks } from "../../hooks/links";
import DownloadIcon from "@mui/icons-material/Download";

function SocialList() {
  const { openUrl, openUrlInNewTab, openMailUrl } = useLinks();

  const linkedInUrl = "https://www.linkedin.com/in/cameron-fuller-455052141/";
  const email = "cameron-fuller@hotmail.com";
  const whatsappUrl = "https://wa.me/+447539250603";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = require("../../assets/cameron-fuller-cv.pdf");
    link.download = "cameron-fuller-cv.pdf";
    link.click();
  };

  return (
    <div>
      <IconButton onClick={() => openUrlInNewTab(linkedInUrl)}>
        <LinkedInIcon />
      </IconButton>
      <IconButton onClick={() => openMailUrl(email)}>
        <EmailIcon />
      </IconButton>
      <IconButton onClick={() => openUrl(whatsappUrl)}>
        <WhatsAppIcon />
      </IconButton>
      <IconButton onClick={handleDownload}>
        <DownloadIcon />
      </IconButton>
    </div>
  );
}

export default SocialList;
