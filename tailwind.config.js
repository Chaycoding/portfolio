/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        balloons: `url(/src/components/images/high quality/bal.webp)`,
        tower: `url(/src/components/images/high quality/thatimg.webp)`,
        rps: `url(/src/components/images/high quality/rps.jpg)`,
        imageparticle: `url(/src/components/images/high quality/imageparticle.jpg)`,
        gamoflife: `url(/src/components/images/high quality/gameoflife.jpg)`,
        calculator: `url(/src/components/images/high quality/calculator.jpg)`,
        fhtml: `url(/src/components/images/high quality/first hmlt.jpg)`,
        compassion: `url(/src/components/images/high quality/compassion project.jpg)`,
        weather: `url(/src/components/images/high quality/weather app.jpg)`,
      },
    },
  },
  plugins: [],
};
