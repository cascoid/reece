import * as React from "react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
			viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 2.333c-6.442 0-11.667 5.356-11.667 11.962 0 5.285 3.343 9.769 7.98 11.35.582.111.77-.26.77-.575v-2.227c-3.245.724-3.92-1.411-3.92-1.411-.531-1.383-1.297-1.75-1.297-1.75-1.058-.743.081-.727.081-.727 1.172.084 1.788 1.233 1.788 1.233 1.04 1.828 2.729 1.3 3.395.994.104-.773.406-1.301.74-1.599-2.59-.304-5.314-1.33-5.314-5.912 0-1.307.456-2.373 1.201-3.21-.12-.303-.52-1.52.114-3.167 0 0 .98-.32 3.21 1.226A10.93 10.93 0 0114 8.118c.992.005 1.99.137 2.922.402 2.228-1.547 3.206-1.226 3.206-1.226.635 1.648.235 2.865.115 3.166.748.838 1.2 1.905 1.2 3.21 0 4.595-2.729 5.607-5.327 5.903.419.37.8 1.099.8 2.215v3.282c0 .318.187.692.78.575 4.632-1.584 7.97-6.067 7.97-11.35 0-6.606-5.223-11.962-11.666-11.962z"
        fill="#2E2C6C"
      />
    </svg>
  );
}

export default GithubIcon;