import { createGlobalStyle, css } from 'styled-components';
import antd from './antd';
import nprogress from './nprogress';

const global = css`
  @font-face {
    font-family: 'Noto Sans';
    src: local('Noto Sans'),
      url('../font/NotoSansCJKkr/NotoSansCJKkr-Medium.otf') format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans';
    font-weight: 700;
    src: local('Noto Sans'),
      url('../font/NotoSansCJKkr/NotoSansCJKkr-Bold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans';
    font-weight: 300;
    src: local('Noto Sans'),
      url('../font/NotoSansCJKkr/NotoSansCJKkr-Light.otf') format('opentype');
  }

  html,
  body {
    font-family: 'Noto Sans', Arial, serif;
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  body {
    background: rgb(240, 242, 245);
  }

  //input[type='text'],
  //input[type='password'] {
  //  font-size: 1rem;
  //}

  button:focus {
    outline: none;
  }

  .remove-left-margin {
    margin-left: 0;
  }

  .cell-nowrap {
    white-space: nowrap;
  }

  .d-block {
    display: block;
  }

  .d-none {
    display: none !important;
  }

  .mde-preview-content {
    img {
      max-width: 800px;
    }
  }

  .ck-editor__editable {
    min-height: 300px;
  }

  @media (max-width: 768px) {
    input,
    textarea,
    select {
      font-size: 16px !important;
    }
  }
`;

export default createGlobalStyle<{}>`
  ${global}
  ${antd}
  ${nprogress}
`;
