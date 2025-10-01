import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* font thai kanit Thin*/
      @font-face {
        font-family: 'KanitThin';
        src: url('./fonts/kanit/Kanit-Thin.ttf') format('truetype');
        font-display: swap;
        font-weight: 100;
        font-style: normal;
      }

      /* font thai kanit Light*/
      @font-face {
        font-family: 'KanitLight';
        src: url('./fonts/kanit/Kanit-Light.ttf') format('truetype');
        font-display: swap;
        font-weight: 300;
        font-style: normal;
      }

      /* font thai kanit Regular*/
      @font-face {
        font-family: 'KanitRegular';
        src: url('./fonts/kanit/Kanit-Regular.ttf') format('truetype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
      }

      /* font thai kanit Medium*/
      @font-face {
        font-family: 'KanitMedium';
        src: url('./fonts/kanit/Kanit-Medium.ttf') format('truetype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
      }

      /* font logo Maven_Pro Regular*/
      @font-face {
        font-family: 'MavenProRegular';
        src: url('./fonts/maven_pro/MavenPro-Regular.ttf') format('truetype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
      }

      /* font logo Maven_Pro Medium*/
      @font-face {
        font-family: 'MavenProMedium';
        src: url('./fonts/maven_pro/MavenPro-Medium.ttf') format('truetype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
      }

      /* Performance optimizations */
      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: 'KanitRegular', sans-serif;
        line-height: 1.6;
        color: #2D3748;
        background-color: #ffffff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }

      /* Improve text rendering */
      h1, h2, h3, h4, h5, h6 {
        font-family: 'KanitMedium', sans-serif;
        font-weight: 500;
        line-height: 1.2;
      }

      /* Optimize images */
      img {
        max-width: 100%;
        height: auto;
        loading: lazy;
      }

      /* Focus styles for accessibility */
      *:focus {
        outline: 2px solid #4DBCB5;
        outline-offset: 2px;
      }

      /* Skip to content link for accessibility */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #4DBCB5;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }

      .skip-link:focus {
        top: 6px;
      }
      `}
  />
)

export default Fonts