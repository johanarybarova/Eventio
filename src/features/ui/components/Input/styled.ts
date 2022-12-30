import { styled } from "~/styles/stitches.config";

export const InputWrapper = styled("div", {
  margin: "$1 0",
});

export const Label = styled("label", {
  display: "block",
  position: "relative",
  paddingTop: "$2",
  textAlign: "start",

  variants: {
    hasError: {
      true: {
        "& input": {
          "border-bottom-color": "$accent$attention",
          $$accent: "$accent$attention",
        },
      },
    },
  },
});

export const LabelText = styled("span", {
  padding: "0.6rem 0",
  display: "block",
  position: "absolute",
  fontSize: "1.8rem",
  color: "$text$formLabel",
  width: "100%",
  top: "$2",
  left: "0px",
  transition: "0.4s transform",
  transformOrigin: "0 50%",
});

export const StyledInput = styled("input", {
  $$accent: "$accent$primary",
  font: "inherit",
  border: "none",
  fontSize: "1.6rem",
  padding: "0.6rem 0",
  display: "block",
  width: "100%",
  outline: "none",
  top: "$2",
  "border-bottom": "1px solid $text$formLabel",
  transition: "border-bottom-color 0.2s",

  "&:focus": {
    "border-bottom-color": "$$accent",
  },

  "&::placeholder": {
    opacity: "0",
  },

  "&:focus + span, &:not(:placeholder-shown) + span": {
    transform: "translateY(-2.5rem) scale(0.8)",
  },
  variants: {
    isError: {
      true: {
        "border-bottom-color": "$accent$attention",
        $$accent: "$accent$attention",
      },
    },
  },
});

export const PasswordToggle = styled("button", {
  position: "absolute",
  padding: "0",
  border: "none",
  color: "$text$formLabel",
  background: "none",
  top: "$2",
  right: "0",
  fontSize: "2.4rem",
  cursor: "pointer",

  variants: {
    isActive: {
      true: {
        color: "$accent$primary",
      },
    },
  },
});

export const InputErrors = styled("p", {
  fontSize: "1.8rem",
  lineHeight: "3.2rem",
  color: "$accent$attention",
  textAlign: 'start',
  });
  
