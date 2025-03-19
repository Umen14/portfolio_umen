import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(50%)', opacity: '0' }, 
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        trackingInContractBck: {
          '0%': {
            letterSpacing: '1em',
            transform: 'translateZ(400px)',
            opacity: '0',
          },
          '40%': {
            opacity: '0.6',
          },
          '100%': {
            transform: 'translateZ(0)',
            opacity: '1',
          },
        },
        tiltIn: {
          '0%' : {
            transform: 'rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideUp: 'slideUp 1s ease-out',
        trackingInContractBck: 'trackingInContractBck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        tiltIn: 'tiltIn 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },

    },
    
  },
  plugins: [],
};
export default config;
