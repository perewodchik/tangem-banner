export type TypographyVariantName =
  | "body-bold"
  | "body-medium"
  | "body-regular"
  | "heading"
  | "subheading";

export type FontProperty =
  | "font-family"
  | "font-size"
  | "font-style"
  | "font-weight"
  | "line-height"
  | "letter-spacing";

export type Font = Record<FontProperty, string>;

export type TypographyVariant = Record<TypographyVariantName, Font>;

export const typographyVariants: TypographyVariant = {
  "body-bold": {
    "font-family": "Graphik LC Web Bold",
    "font-size": "16px",
    "font-style": "normal",
    "font-weight": "600",
    "line-height": "20px",
    "letter-spacing": "0.048px",
  },
  "body-medium": {
    "font-family": "Graphik LC Web Medium",
    "font-size": "16px",
    "font-style": "normal",
    "font-weight": "500",
    "line-height": "130%",
    "letter-spacing": "0.08px",
  },
  "body-regular": {
    "font-family": "Graphik LC Web Regular",
    "font-size": "16px",
    "font-style": "normal",
    "font-weight": "400",
    "line-height": "20px",
    "letter-spacing": "0.048px",
  },
  heading: {
    "font-family": "Graphik LC Web Medium",
    "font-size": "46px",
    "font-style": "normal",
    "font-weight": "500",
    "line-height": "110%",
    "letter-spacing": "-1.84px",
  },
  subheading: {
    "font-family": "Graphik LC Web Medium",
    "font-size": "40px",
    "font-style": "normal",
    "font-weight": "500",
    "line-height": "110%",
    "letter-spacing": "-1.6px",
  },
};
