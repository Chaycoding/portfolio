/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        balloons: `url(/src/components/images/highquality/bal.webp)`,
        tower: `url(/src/components/images/highquality/thatimg.webp)`,
        contacthero: `url(/src/components/images/highquality/contacthero.webp)`,
        rps: `url(/src/components/images/highquality/rps.jpg)`,
        imageparticle: `url(/src/components/images/highquality/imageparticle.jpg)`,
        gamoflife: `url(/src/components/images/highquality/gameoflife.jpg)`,
        calculator: `url(/src/components/images/highquality/calculator.jpg)`,
        fhtml: `url(/src/components/images/highquality/firsthmlt.jpg)`,
        compassion: `url(/src/components/images/highquality/compassionproject.jpg)`,
        weather: `url(/src/components/images/highquality/weatherapp.jpg)`,
        blogsite: `url(/src/components/images/highquality/blogsite.jpg)`,
        pageanimation: `url(/src/components/images/highquality/pageanimation.jpg)`,
        fluttertask1: `url(/src/components/images/highquality/fluttertask1.jpg)`,
        fluttertask2: `url(/src/components/images/highquality/fluttertask2.jpg)`,
        fluttertask3: `url(/src/components/images/highquality/fluttertask3.jpg)`,
        flutternotes1: `url(/src/components/images/highquality/flutternotes1.jpg)`,
        flutternotes2: `url(/src/components/images/highquality/flutternotes2.jpg)`,
        flutternotes3: `url(/src/components/images/highquality/flutternotes3.jpg)`,
        japanbirth1: `url(/src/components/images/highquality/datascience/japanbirth1.png)`,
        japanbirth2: `url(/src/components/images/highquality/datascience/japanbirth2.png)`,
        japanbirth3: `url(/src/components/images/highquality/datascience/japanbirth3.png)`,
        japanbirth4: `url(/src/components/images/highquality/datascience/japanbirth4.png)`,
        japanbirth5: `url(/src/components/images/highquality/datascience/japanbirth5.png)`,
        auhappy: `url(/src/components/images/highquality/datascience/auhappy.jpg)`,
        coolcog: `url(/src/components/images/highquality/coolcog.svg)`,
        coolcogb: `url(/src/components/images/highquality/coolcogb.svg)`,
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
