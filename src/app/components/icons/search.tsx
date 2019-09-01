import React from 'react'

const SearchIcon: React.FC = (props) => {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0)">
        <path d="M19.0744 17.1364L14.1294 12.2241C15.0594 10.9535 15.6093 9.39075 15.6093 7.70292C15.6093 3.45562 12.1306 0 7.85425 0C3.57864 0 0.0999756 3.45562 0.0999756 7.70292C0.0999756 11.951 3.57864 15.4058 7.85425 15.4058C9.47523 15.4058 10.9807 14.9095 12.2271 14.0616L17.1984 19L19.0744 17.1364ZM2.37446 7.70292C2.37446 4.70092 4.83303 2.25863 7.85504 2.25863C10.8771 2.25863 13.3356 4.70092 13.3356 7.70292C13.3356 10.7049 10.8771 13.1472 7.85504 13.1472C4.83223 13.1472 2.37446 10.7049 2.37446 7.70292Z" fill="#B1BCC3" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="19.1267" height="19" fill="white" transform="translate(0.0999756)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchIcon