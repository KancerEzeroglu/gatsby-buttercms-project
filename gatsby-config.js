module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-buttercms',
            options: {
                authToken: '7916e26cf4e6f6821bcebc63d895dbcfb4b52d67',
                pages: [`homepage`],
                pageTypes: [`customer_case_study`],//eger pagetype eklenmezse grapql ile sorgu gelmedi.
            },
        }
    ]
}