import { styled } from '~/styles/stitches.config'

export const ProfileCard = styled("div", {
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: '2px',
    width: "100%",
    height: "18.7rem",
    bg: "white",
    margin: "0 0 3.7rem"
  })

  export const ProfileCircle = styled("div", {
    position: "absolute",
    borderRadius: '50%',
    transform: "translate(-50%, -50%)",
    left: "50%",
    width: "12rem",
    height: "12rem",
    bg: "$grey850",
  })


