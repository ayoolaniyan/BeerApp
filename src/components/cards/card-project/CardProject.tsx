import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { Avatar, Typography } from "@mui/material";

interface Props {
  type?: string;
  title?: string;
  city?: string;
}

export function CardProject(props: Props) {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        height: '50vh',
        borderRadius: "1px",
        boxShadow: "none",
        backgroundColor: "transparent",
        transition: "0.3s",
      }}
    >
      <Box sx={{ minWidth: '100%' }}>
        <Box
          sx={{
            padding: `4px 24px 0`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            alt={"brand logo"}
            src="https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
            sx={(theme) => ({
              width: 48,
              height: 48,
              transform: "translateY(50%)",
              "& > img": {
                margin: 0,
                backgroundColor: "common.white",
              },
              [theme.breakpoints.up("sm")]: {
                width: 60,
                height: 60,
              },
            })}
          />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: 14,
              color: "grey.500",
              letterSpacing: "1px",
            }}
          >
            {props.type}
          </Typography>
        </Box>
        <Box
          component="hr"
          sx={(theme) => ({
            backgroundColor: "grey.200",
            marginBottom: `${24 - 1}px`, // minus 1 due to divider height
            [theme.breakpoints.up("sm")]: {
              marginBottom: `${30 - 1}px`, // minus 1 due to divider height
            },
          })}
        />
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Info>
          <InfoTitle>{props.title}</InfoTitle>
          <InfoSubtitle>{props.city}</InfoSubtitle>
        </Info>
      </CardContent>
    </Card>
  );
}
