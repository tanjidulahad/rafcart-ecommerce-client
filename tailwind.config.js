module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px'
    },
    container:{
      center:true,
      padding:'1rem'
    },
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif",
        roboto:"'Roboto', sans-serif"
      },
      colors:{
        'primary':'#FD3D57'
      }
    },
  },
  variants: {
    extend: {
      visibility:['group-hover']
    },
  },
  plugins: [require('@tailwindcss/custom-forms'),],
}
