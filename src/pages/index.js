import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
    const home = data.home.edges[0].node

    return (
        <Layout>

            <div
                style={{
                    height: `50%`,
                    display: `flex`,
                    padding: `1rem`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    flexDirection: `column`,
                    background: `linear-gradient(-45deg, rgb(29, 64, 86) 0%, rgb(60, 24, 78) 100%)`,
                }}
            >
                <h1
                    style={{
                        textAlign: `center`,
                        color: `white`,
                        fontSize: `2.5rem`,
                        fontWeight: `100`,
                        maxWidth: `960px`,
                    }}
                >
                    {home.headline}
                </h1>
                <button
                    style={{
                        padding: `0.75rem`,
                        backgroundColor: `white`,
                        border: `none`,
                        fontSize: `1.5rem`,
                        borderRadius: `10px`,
                    }}
                >
                    {home.call_to_action}
                </button>
            </div>

            {/* <h1> {page.hero_image}</h1> */}

            <h1 style={{ fontWeight: `100`, textAlign: `center` }}>Our Customers</h1>
            <div
                style={{
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    justifyContent: `center`,
                }}
            >
                {home.customer_logos.map(({ logo_image }) => (
                    <img
                        key={logo_image}
                        style={{ width: `200px`, borderRadius: `10px` }}
                        src={logo_image}
                    />
                ))}
            </div>
        </Layout>
    )
}

//GraphQl query to fetch homepage data
export const query = graphql`
  {
  home: allButterPage(filter: {page_type: {eq: "customer_case_study"}}) {
    edges {
      node {
        slug
        headline
          seo_title
          customer_logos {
            logo_image
          }
          hero_image
          call_to_action
      }
    }
  }
 }
`

export default IndexPage