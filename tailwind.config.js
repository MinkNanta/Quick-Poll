module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: { max: "640px" },
    },

    fontSize: {
      "9xl": ["144px", { lineHeight: "144px" }],
      "8xl": ["128px", { lineHeight: "128px" }],
      "7xl": ["72px", { lineHeight: "72px" }],
      "6xl": ["60px", { lineHeight: "60px" }],
      "5xl": ["48px", { lineHeight: "58px", letterSpacing: "-0.04em" }],
      "4xl": ["36px", { lineHeight: "46px" }],
      "3xl": ["30px", { lineHeight: "36px" }],
      "2xl": ["24px", { lineHeight: "32px" }],
      lg: ["20px", { lineHeight: "28px" }],
      x: ["18px", { lineHeight: "28px" }],
      base: ["16px", { lineHeight: "24px" }],
      xs: ["12px", { lineHeight: "16px" }],
    },
    colors: {
      main: "#EEEBFD",
      bg_main: "#FFFFFF",
      bg_sup: "#F7F5FA",
      t_main: "#070A39",
      t_support: "rgba(7, 10, 57, 0.7)",
      t_label: "rgba(7, 10, 57, 0.5)",
      t_link: "#5248B5",
      line: "rgba(247, 245, 250, 1)",
      blue_sup: "#2093FD",
      success: "#6BCA85",
      danger: "#CF3881",
      buttonHover: "rgba(82, 72, 181, 0.1)",
      dark: "#181A2E",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 4px 16px 0px rgba(221, 219, 233, 1)",
      },
    },
  },
  plugins: [],
};
