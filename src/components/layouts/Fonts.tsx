import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* font thai kanit Thin*/
      @font-face {
        font-family: 'KanitThin';
        src: url('./fonts/kanit/Kanit-Thin.ttf') format('truetype');
      }

      /* font thai kanit Light*/
      @font-face {
        font-family: 'KanitLight';
        src: url('./fonts/kanit/Kanit-Light.ttf') format('truetype');
      }

      /* font thai kanit Regular*/
      @font-face {
        font-family: 'KanitRegular';
        src: url('./fonts/kanit/Kanit-Regular.ttf') format('truetype');
      }

      /* font thai kanit Medium*/
      @font-face {
        font-family: 'KanitMedium';
        src: url('./fonts/kanit/Kanit-Medium.ttf') format('truetype');
      }

      /* font thai kanit Black
      @font-face {
        font-family: 'KanitBlack';
        src: url('./fonts/kanit/Kanit-Black.ttf') format('truetype');
      }

      /* font logo Maven_Pro Regular
      @font-face {
        font-family: 'MavenProRegular';
        src: url('./fonts/maven_pro/MavenPro-Regular.ttf') format('truetype');
      }

      /* font logo Maven_Pro Medium
      @font-face {
        font-family: 'MavenProMedium';
        src: url('./fonts/maven_pro/MavenPro-Medium.ttf') format('truetype');
      }
      `}
  />
)

export default Fonts