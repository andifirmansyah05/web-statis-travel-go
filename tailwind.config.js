/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../img/hero.png')",
        'aboutUs': "url('../img/about-us-2.jpg')",
        'sideAboutUs': "url('../img/side-about-us.jpg')",
        'bestService': "url('../img/world_map_PNG28.png')",
        'destination': "url('../img/world_map_PNG28_2.png')"
      },
      fontFamily: {
        OpenSans: 'OpenSans',
        Poppins: 'Poppins',
        Montserrat: 'Montserrat'
      },
      colors: {
        second: "#005853",
        third: "#ECF1F0",
        button: '#00A651',
        buttonSecond: '#666666',
        orangeCus: '#F0BB1F',
        redCus: '#F15A2B',
        blueCus: '#006380',
        blueCus2: '#59B1E6',
        font1: '#5E6282',
        font2: '#84829A',
        font3: '#8A79DF',
        hijauCus: '#9FFFEC',
        abuCus: '#F5F5F5',
        insta1: '#4f5bd5',
        insta2: '#962fbf',
        insta3: '#d62976',
        insta4: '#fa7e1e',
        insta5: '#feda75',
        facebook: '#3b5998'
      }
    },
  },
  plugins: [],
}