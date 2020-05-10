import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "./product.module.css"

import {Link} from "gatsby"

import Image from "gatsby-image"
const ComponentName = ({ data }) =>{
    const {allContentfulProduct:{nodes: products},} = data;
   

    return(
        <Layout>
          <section className={styles.page}>
             {products.map(product=>{
                 return <article key={product.id}>
                   <Image fluid={product.image.fluid} alt={product.title}></Image>
                   <h3>{product.title} <span>{product.price}</span></h3>
                   <Link to={`/products/${product.slug}`}>More details</Link>
                 </article>
             })}
          </section>
        </Layout>
    )
}
  

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName

