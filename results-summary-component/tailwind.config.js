/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        custom: "Hanken Grotesk",
      },
      colors: {
        "pale-blue": "hsl(221, 100%, 96%)",
        lavender: "hsl(241, 100%, 89%)",
        "gray-blue": "hsl(224, 30%, 27%)",
        "light-red": "hsl(0, 100%, 67%)",
        violet: "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "royal-blue": "hsl(241, 81%, 54%)",
        "slate-blue": "hsl(252, 100%, 67%)",
        teal: "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
      },
      screens: {
        me: "688px",
      },
    },
  },
  plugins: [],
};
