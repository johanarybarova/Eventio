import { styled } from "~/styles/stitches.config";

export const ProfileCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
  borderRadius: "2px",
  width: "100%",
  height: "18.7rem",
  bg: "white",
  margin: "0 0 4.2rem",
});

export const ProfileCircle = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  borderRadius: "50%",
  transform: "translate(-50%, -50%)",
  left: "50%",
  width: "12rem",
  height: "12rem",
  bg: "$grey850",

  p: {
    transform: "translate(0, 8%)",
  },

  abbr: {
    fontSize: "4rem",
    fontWeight: "500",
    color: "$grey500",
    textDecoration: "none",
  },
});

export const ProfileName = styled("p", {
  marginTop: "4rem",
  fontSize: "1.8rem",
  lineHeight: "2.4rem",
  color: "$grey100",
});
