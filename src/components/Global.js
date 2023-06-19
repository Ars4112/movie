import { createGlobalStyle } from "styled-components";

 const Global = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
body {
  width: 100%;
  height: 100%;
  
}
img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

textarea {
  resize: none;
}
`;
 

export default Global;