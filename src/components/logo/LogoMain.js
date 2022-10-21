import PropTypes from 'prop-types';

// material-ui
// import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const LogoMain = () => {
  // const theme = useTheme();
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Mantis" width="100" />
     *
     */
    <>
      {/* <svg width="118" height="35" viewBox="0 0 118 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.63564 15.8644L6.94797 13.552L6.95038 13.5496H11.3006L9.56969 15.2806L9.12278 15.7275L7.35024 17.5L7.56977 17.7201L17.5 27.6498L27.6498 17.5L25.8766 15.7275L25.7518 15.602L23.6994 13.5496H28.0496L28.052 13.552L29.8644 15.3644L32 17.5L17.5 32L3 17.5L4.63564 15.8644ZM17.5 3L25.8784 11.3784H21.5282L17.5 7.35024L13.4718 11.3784H9.12158L17.5 3Z"
          fill={theme.palette.primary.dark}
        />
        <path
          d="M7.35025 17.5L9.1228 15.7275L9.5697 15.2805L7.83937 13.5496H6.95039L6.94798 13.552L4.63564 15.8644L6.8551 18.073L7.35025 17.5Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M25.8767 15.7275L27.6498 17.5L27.4743 17.6755L27.4749 17.6761L29.8644 15.3644L28.0521 13.552L28.0497 13.5496H27.8736L25.7518 15.602L25.8767 15.7275Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M6.94549 13.5496L6.9479 13.552L9.12272 15.7275L17.4999 24.1041L28.0544 13.5496H6.94549Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M46.5781 10V26H49.3594V14.9844H49.5078L53.9297 25.9531H56.0078L60.4297 15.0078H60.5781V26H63.3594V10H59.8125L55.0625 21.5937H54.875L50.125 10H46.5781ZM69.8438 26.2422C71.7266 26.2422 72.8516 25.3594 73.3672 24.3516H73.4609V26H76.1797V17.9687C76.1797 14.7969 73.5937 13.8438 71.3047 13.8438C68.7813 13.8438 66.8437 14.9687 66.2188 17.1562L68.8594 17.5312C69.1406 16.7109 69.9375 16.0078 71.3203 16.0078C72.6328 16.0078 73.3516 16.6797 73.3516 17.8594V17.9062C73.3516 18.7188 72.5 18.7578 70.3828 18.9844C68.0547 19.2344 65.8281 19.9297 65.8281 22.6328C65.8281 24.9922 67.5547 26.2422 69.8438 26.2422ZM70.5781 24.1641C69.3984 24.1641 68.5547 23.625 68.5547 22.5859C68.5547 21.5 69.5 21.0469 70.7656 20.8672C71.5078 20.7656 72.9922 20.5781 73.3594 20.2812V21.6953C73.3594 23.0312 72.2813 24.1641 70.5781 24.1641ZM81.8516 18.9687C81.8516 17.2344 82.8984 16.2344 84.3906 16.2344C85.8516 16.2344 86.7266 17.1953 86.7266 18.7969V26H89.5547V18.3594C89.5625 15.4844 87.9219 13.8438 85.4453 13.8438C83.6484 13.8438 82.4141 14.7031 81.8672 16.0391H81.7266V14H79.0234V26H81.8516V18.9687ZM98.4219 14H96.0547V11.125H93.2266V14H91.5234V16.1875H93.2266V22.8594C93.2109 25.1172 94.8516 26.2266 96.9766 26.1641C97.7813 26.1406 98.3359 25.9844 98.6406 25.8828L98.1641 23.6719C98.0078 23.7109 97.6875 23.7812 97.3359 23.7812C96.625 23.7812 96.0547 23.5312 96.0547 22.3906V16.1875H98.4219V14ZM100.787 26H103.615V14H100.787V26ZM102.209 12.2969C103.107 12.2969 103.842 11.6094 103.842 10.7656C103.842 9.91406 103.107 9.22656 102.209 9.22656C101.303 9.22656 100.568 9.91406 100.568 10.7656C100.568 11.6094 101.303 12.2969 102.209 12.2969ZM116.008 17.1719C115.617 15.1406 113.992 13.8438 111.18 13.8438C108.289 13.8438 106.32 15.2656 106.328 17.4844C106.32 19.2344 107.398 20.3906 109.703 20.8672L111.75 21.2969C112.852 21.5391 113.367 21.9844 113.367 22.6641C113.367 23.4844 112.477 24.1016 111.133 24.1016C109.836 24.1016 108.992 23.5391 108.75 22.4609L105.992 22.7266C106.344 24.9297 108.195 26.2344 111.141 26.2344C114.141 26.2344 116.258 24.6797 116.266 22.4062C116.258 20.6953 115.156 19.6484 112.891 19.1562L110.844 18.7188C109.625 18.4453 109.141 18.0234 109.148 17.3281C109.141 16.5156 110.039 15.9531 111.219 15.9531C112.523 15.9531 113.211 16.6641 113.43 17.4531L116.008 17.1719Z"
          fill={theme.palette.mode === 'dark' || reverse ? theme.palette.common.white : theme.palette.common.black}
          fillOpacity="0.85"
        />
        <defs>
          <linearGradient id="paint0_linear" x1="8.62526" y1="14.0888" x2="5.56709" y2="17.1469" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.palette.primary.darker} />
            <stop offset="0.9637" stopColor={theme.palette.primary.dark} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="26.2675" y1="14.1279" x2="28.7404" y2="16.938" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.palette.primary.darker} />
            <stop offset="1" stopColor={theme.palette.primary.dark} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg> */}
      <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.6396 22.7451C19.2791 23.0542 18.8193 23.2366 18.336 23.2621H12.3114C11.8278 23.2366 11.3677 23.0543 11.0067 22.7451L10.5813 22.3356C10.4373 22.1993 10.2431 22.1228 10.0407 22.1228C9.8383 22.1228 9.64406 22.1993 9.50013 22.3356L4.97735 26.668C4.83456 26.8055 4.75439 26.9916 4.75439 27.1856C4.75439 27.3795 4.83456 27.5656 4.97735 27.7031L6.69916 29.352C6.84292 29.4884 7.03706 29.5648 7.23937 29.5648C7.44169 29.5648 7.63583 29.4884 7.77959 29.352L11.0073 26.2588C11.3682 25.9498 11.8281 25.7675 12.3115 25.742H18.3379C18.8212 25.7674 19.2809 25.9497 19.6414 26.2588L22.8706 29.352C23.0143 29.4884 23.2083 29.5648 23.4106 29.5648C23.6127 29.5648 23.8068 29.4884 23.9504 29.352L25.6722 27.7031C25.8151 27.5656 25.8952 27.3795 25.8952 27.1856C25.8952 26.9916 25.8151 26.8055 25.6722 26.668L21.1462 22.3353C21.0026 22.199 20.8086 22.1226 20.6064 22.1226C20.4043 22.1226 20.2102 22.199 20.0666 22.3353L19.6396 22.7451Z"
          fill="#583BD1"
        />
        <path
          d="M11.1155 7.24549C11.4759 6.93593 11.9359 6.75351 12.4193 6.72843H18.4444C18.9277 6.75395 19.3874 6.93632 19.7481 7.24549L20.1756 7.65469C20.2463 7.72258 20.3305 7.77644 20.4231 7.81319C20.5157 7.84993 20.6149 7.86886 20.7151 7.86886C20.8153 7.86886 20.9147 7.84993 21.0072 7.81319C21.0998 7.77644 21.1839 7.72258 21.2548 7.65469L25.7788 3.32209C25.9215 3.18455 26.0016 2.99848 26.0016 2.80454C26.0016 2.61062 25.9215 2.42456 25.7788 2.287L24.057 0.640038C23.9137 0.502924 23.7194 0.425903 23.5168 0.425903C23.3142 0.425903 23.12 0.502924 22.9767 0.640038L19.7483 3.73171C19.3876 4.04087 18.9278 4.22324 18.4446 4.24876H12.4193C11.9359 4.22368 11.4759 4.04126 11.1155 3.73171L7.88705 0.640038C7.74329 0.503758 7.54919 0.427312 7.3469 0.427312C7.14462 0.427312 6.95052 0.503758 6.80675 0.640038L5.08494 2.28892C4.94219 2.42645 4.86206 2.61249 4.86206 2.8064C4.86206 3.00031 4.94219 3.18635 5.08494 3.32388L9.60787 7.65455C9.75116 7.79167 9.94544 7.86868 10.148 7.86868C10.3506 7.86868 10.5449 7.79167 10.6882 7.65455L11.1155 7.24549Z"
          fill="#583BD1"
        />
        <path
          d="M23.5471 10.8833C23.8707 11.229 24.0615 11.6702 24.0878 12.1338V17.9026C24.0614 18.366 23.8706 18.8068 23.5471 19.152L23.1205 19.5614C22.9779 19.6988 22.8979 19.8846 22.8979 20.0784C22.8979 20.2721 22.9779 20.4579 23.1205 20.5954L27.6451 24.9272C27.7886 25.0639 27.9828 25.1406 28.1851 25.1406C28.3876 25.1406 28.5817 25.0639 28.7251 24.9272L30.4469 23.2774C30.5898 23.1401 30.6701 22.9541 30.6701 22.7603C30.6701 22.5665 30.5898 22.3805 30.4469 22.2432L27.2193 19.1515C26.8956 18.8062 26.7047 18.3654 26.6783 17.9021L26.6791 12.1332C26.7051 11.6696 26.8956 11.2285 27.2193 10.8828L30.4469 7.79113C30.5898 7.65408 30.6701 7.46834 30.6701 7.27469C30.6701 7.08104 30.5898 6.89529 30.4469 6.75824L28.7251 5.10839C28.6542 5.04048 28.5701 4.9866 28.4775 4.94984C28.3847 4.91309 28.2855 4.89417 28.1851 4.89417C28.0849 4.89417 27.9856 4.91309 27.8929 4.94984C27.8002 4.9866 27.7161 5.04048 27.6451 5.10839L23.1205 9.44002C22.9779 9.57746 22.8979 9.76334 22.8979 9.95709C22.8979 10.1508 22.9779 10.3367 23.1205 10.4742L23.5471 10.8833Z"
          fill="#583BD1"
        />
        <path
          d="M7.20847 19.107C6.88566 18.7616 6.69545 18.3212 6.66926 17.8584V12.0874C6.69538 11.6245 6.88559 11.1841 7.20847 10.8388L7.63492 10.4304C7.77793 10.2932 7.85823 10.1072 7.85823 9.91339C7.85823 9.71953 7.77793 9.53359 7.63492 9.39639L3.11157 5.06407C2.96813 4.92727 2.77394 4.85046 2.57149 4.85046C2.36904 4.85046 2.17485 4.92727 2.03142 5.06407L0.309601 6.71296C0.167259 6.85051 0.0874023 7.03631 0.0874023 7.22996C0.0874023 7.42361 0.167259 7.60941 0.309601 7.74695L3.538 10.8386C3.86146 11.1836 4.05193 11.6242 4.07779 12.0872V17.8583C4.052 18.3211 3.8615 18.7613 3.538 19.1061L0.309601 22.1989C0.167259 22.3365 0.0874023 22.5223 0.0874023 22.7158C0.0874023 22.9095 0.167259 23.0953 0.309601 23.2329L2.03142 24.8817C2.17487 25.0185 2.36906 25.0953 2.57149 25.0953C2.77392 25.0953 2.96812 25.0185 3.11157 24.8817L7.63492 20.5491C7.77791 20.4118 7.85822 20.226 7.85822 20.0322C7.85822 19.8382 7.77791 19.6524 7.63492 19.5152L7.20847 19.107Z"
          fill="#583BD1"
        />
      </svg>
    </>
  );
};

LogoMain.propTypes = {
  reverse: PropTypes.bool
};

export default LogoMain;
