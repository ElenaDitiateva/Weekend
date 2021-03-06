module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: (theme) => ({
        Sea: "#00CCA9",
        Orange: "#FF9F39",
        Blue: "#466FBD",
        Crimson: "#BD467F",
        Gray: "#979797",
      }),
      backgroundColor: (theme) => ({
        Sea: "#00CCA9",
        Orange: "#FF9F39",
        Blue: "#466FBD",
        Crimson: "#BD467F",
        lightGray: "#F6F6F6",
      }),
      borderColor: (theme) => ({
        Sea: "#00CCA9",
        Orange: "#FF9F39",
        Blue: "#466FBD",
        Crimson: "#BD467F",
      }),
      borderRadius: {
        "10px": "10px",
        2.5: "1.25rem",
      },
      boxShadow: {
        drop: "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
      minWidth: {
        14: "60px",
      },
      maxWidth: {
        25: "100px",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
      backgroundColor: ["active"],
      borderColor: ["active"],
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [],
};
