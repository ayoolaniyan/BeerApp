import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export function CardNews2() {
  return (
    <Card
      sx={{
        maxWidth: 304,
        margin: "auto",
        borderRadius: 0,
        position: "relative",
      }}
    >
      <CardMedia
        image={
          "/assets/beer-02.jpeg"
        }
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundColor: "rgba(255, 255, 255, 1)",
          backgroundPosition: "center",
          boxShadow: "0 8px 40px -12px rgba(255,255,255,1)",
          transition: "0.3s",
        }}
      />
      <CardActionArea>
        <CardContent sx={{ p: 3 }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={415}
          >
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
