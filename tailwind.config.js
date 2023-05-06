/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            extend: {

            },
        },
        corePlugins: {
            prefelight: false,
        },
        plugins: [
            function({ addBase }) {
                addBase({
                    body: {
                        backgroundColor: '#ecf0f3',
                        color: '#1f2937',
                        letterSpacing: '0.05em',
                    },
                    'h1,h2,h3,h4,h5,h6': {
                        fontWeight: 'bold',
                    },
                    'h1': {
                        fontSize: ['4xl', '5xl', '6xl'],
                    },
                    'h2': {
                        fontSize: ['3xl', '4xl'],
                    },
                    'li': {
                        cursor: 'pointer',
                    },
                    'button': {
                        boxShadow: 'xl',
                        borderColor: '#5651e5',
                        borderRadius: '0.75rem',
                        textTransform: 'uppercase',
                        backgroundImage: 'linear-gradient(to right, #5651e5, #709dff)',
                        color: 'white',
                    }
                })
            }
        ]
    },
    plugins: [],
}