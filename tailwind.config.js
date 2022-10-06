/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./code.js"
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1.5rem',
                    "sm": '0rem'
                }
            },
            colors: {
                "soft-red": "hsl(0, 94%, 66%)",
                "very-dark-blue-500": "rgb(37 43 70 / 90%)",
                "royal-blue": "#5368df"
            },
            borderWidth: {
                "3": "3px"
            },
            screens: {
                "special": '500px',
                'sm2': {'min': '640px', 'max': '767px'},
                'special2': {'max': '396px'},
                "re-medium": {'max': '767px'}
            },
            minWidth: {
                '9/10': '90%',
            },
            keyframes: {
                fadeout: {
                    '50%' :{ translate: '-60px' },
                    '100%' :{ translate: '-60px',opacity: '0' }
                },
                fadein: {
                    '0%': {translate: '-60px', opacity: 0},
                    '100%' :{ translate: '0px',opacity: '1' }
                },
                fadeout2: {
                    '50%' :{ translate: '60px' },
                    '100%' :{ translate: '60px',opacity: '0' }
                },
                fadein2: {
                    '0%': {translate: '60px', opacity: 0},
                    '100%' :{ translate: '0px',opacity: '1' }
                },
                sweep: {
                    'from': {opacity: '0', translate: '0 -10px'},
                    'to': {opacity: '1', translate: '0 0'}
                }
            },
            animation: {
                fadeout: 'fadeout 1s forwards cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                fadein: 'fadein 500ms forwards cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                fadeout2: 'fadeout2 1s forwards cubic-bezier(0.390, 0.575, 0.565, 1.000)',
                fadein2: 'fadein2 500ms forwards cubic-bezier(0.250, 0.460, 0.450, 0.940)',
                sweep: 'sweep .5s ease-out'
            }
        },
    },
    plugins: [],
};
