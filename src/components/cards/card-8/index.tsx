import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CSSObject, styled } from "@mui/material/styles";
import {
  Info,
  InfoEyebrow,
  InfoSlotStyles,
  InfoSubtitle,
  InfoTitle,
} from "../card-7";

interface Props {
  type?: string;
  title?: string;
  icon?: JSX.Element;
}

const useStyles = (): CSSObject & Partial<InfoSlotStyles> => {
  return {
    eyebrow: {
      color: "rgba(0, 0, 0, 0.92)",
      fontFamily: '"Spartan", san-serif',
      lineHeight: 1.4,
      fontSize: "1.0625rem",
      letterSpacing: "1px",
      textTransform: "initial",
      marginBottom: 0,
    },
    title: {
      color: "#000",
      fontSize: "1.25rem",
      fontWeight: "bold" as const,
      lineHeight: 1.2,
    },
    subtitle: {
      color: "rgba(0, 0, 0, 0.72)",
      lineHeight: 1.5,
      "&:last-child": {
        marginTop: "1rem",
      },
    },
  };
};

const StyledCard = styled(Card)({
  borderRadius: ".5rem",
  boxShadow: "rgba(0,0,0,1)",
  position: "relative",
  minWidth: 200,
  minHeight: 360,
  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "25%",
    bottom: 0,
    zIndex: 1,
    background: "linear-gradient(to top, #f2f2f2, rgba(255,255,255,.5))",
  },
});

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundPosition: "top",
});

const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing(3, 2),
  position: "absolute",
  zIndex: 2,
  bottom: 0,
  width: "100%",
}));

const Card8 = (props: Props) => {
  return (
    <StyledCard>
      <StyledCardMedia
        image={
          "/assets/beer-02.jpeg"}
      />
      <Content>
        <Info useStyles={useStyles}>
          <InfoEyebrow>{props.type}</InfoEyebrow>
          <InfoTitle>{props.title}</InfoTitle>
          <InfoSubtitle>{props.icon}</InfoSubtitle>
        </Info>
      </Content>
    </StyledCard>
  );
}
export default Card8;