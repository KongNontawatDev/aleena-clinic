import { extendTheme } from '@chakra-ui/react'

const Container = {
  sizes: {
    myCustomSize: {
      maxW: '130ch',
    }
  },

  defaultProps: {
    size: 'myCustomSize'
  }
}

const theme = extendTheme({
  colors:{
    primary: {
      main:"#4DBCB5",
      25:"rgb(77,188,181,0.1)",
      50:"#A6E0DF",
      75:"#75CFCD",
    },
    black: '#000',
    white: '#fff',
    dark:'#2D3748',
  },
  fonts: {
    heading: `'KanitMedium', sans-serif`,
    body: `'KanitRegular', sans-serif`,
    mono: `'KanitLight', sans-serif`,
    heading_logo:`'MavenProMedium',sans-serif`,
    body_logo:`'MavenProRegular',sans-serif`,
  },
  fontSizes: {
    xs: "0.8rem",
    sm: "0.9rem",
    md: "1rem",
    lg: "1.2rem",
    xl: "1.3rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  components:{
    Container
  }
})

export default theme