import {
    injectGlobal
} from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal `
html,
body {
    height: 100%;
    width: 100%;
}

body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    margin: 0;
    padding: 0;
}

#app {
    background-color: #fff;
    min-height: 100%;
    min-width: 1200px;
    min-height: 100%;
    position: relative;
}
* {
    box-sizing: border-box;
}
`;