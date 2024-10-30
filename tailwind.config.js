/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../img/hero.png')",
        'bestService': "url('../img/world_map_PNG28.png')",
        'destination': "url('../img/world_map_PNG28_2.png')"
      },
      fontFamily: {
        OpenSans: 'OpenSans',
        Poppins: 'Poppins'
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
        abuCus: '#F5F5F5'
      }
    },
  },
  plugins: [],
}