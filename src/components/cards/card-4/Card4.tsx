import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
import Share from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { Info, InfoSubtitle, InfoTitle } from "../card-7";

interface Props {
  type?: string;
  title?: string;
  icon?: JSX.Element;
}

export function Card4(props: Props) {
  return (
    <Card
      sx={{
        maxWidth: '100%',
        margin: "auto",
        boxShadow: "none",
        transition: "0.3s",
        border: '0',
      }}
    >
      <CardMedia
        image={
          "/assets/bluebg.jpeg"
        }
        sx={{
          width: "100%",
          paddingBottom: "56.25%",
          clipPath: "polygon(0 0, 100% 0%, 100% 84%, 0% 100%)",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      />
      <CardContent sx={{ p: 3 }}>
        <Info>
          <InfoTitle>{props.title}</InfoTitle>
          <InfoSubtitle>{props.type}</InfoSubtitle>
        </Info>
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton>
          <Share />
        </IconButton>
        <IconButton>
          <FavoriteBorderRounded />
        </IconButton>
      </Box>
    </Card>
  );
}
