/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        balloons: `url(/src/components/images/high quality/bal.webp)`,
        tower: `url(/src/components/images/high quality/thatimg.webp)`,
        contacthero: `url(/src/components/images/high quality/contacthero.webp)`,
        rps: `url(/src/components/images/high quality/rps.jpg)`,
        imageparticle: `url(/src/components/images/high quality/imageparticle.jpg)`,
        gamoflife: `url(/src/components/images/high quality/gameoflife.jpg)`,
        calculator: `url(/src/components/images/high quality/calculator.jpg)`,
        fhtml: `url(/src/components/images/high quality/firsthmlt.jpg)`,
        compassion: `url(/src/components/images/high quality/compassionproject.jpg)`,
        weather: `url(/src/components/images/high quality/weatherapp.jpg)`,
        blogsite: `url(/src/components/images/high quality/blogsite.jpg)`,
        pageanimation: `url(/src/components/images/high quality/pageanimation.jpg)`,
        fluttertask1: `url(/src/components/images/high quality/fluttertask1.jpg)`,
        fluttertask2: `url(/src/components/images/high quality/fluttertask2.jpg)`,
        fluttertask3: `url(/src/components/images/high quality/fluttertask3.jpg)`,
        coolcog: `url(/src/components/images/high quality/coolcog.svg)`,
        coolcogb: `url(/src/components/images/high quality/coolcogb.svg)`,
      },
      animation: {
        fade: "fadeOut 1s ease-in-out",
      },
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      }),
    },
  },
  plugins: [],
};
