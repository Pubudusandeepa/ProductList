import React from 'react'
import Layout from "../components/Layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"
const example = ({data}) => {
    const {site: {info:{author, description}}} = data
    console.log(data)
    return (
        <Layout>
           <h1> Hello Example page</h1>
           <Header/>
           <HeaderStatic />
           <h5>author: {author}</h5>
           <h4>description: {description}</h4>
        </Layout>
    )
}

export const data = graphql`
{
    site{
      info:siteMetadata{
        title
        description
        author
        data
        person {
          name
          age
        }
        
      }
    }
  }
`

export default example
