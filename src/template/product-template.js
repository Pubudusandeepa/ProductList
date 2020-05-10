import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"


const ComponentName = ({ data}) => {

    const { products:{ price, title, image:{fixed}, info:{info}},} = data;
    return (
        <Layout>
           <div style={{textAlign:"center"}}>
           <Link to="/products">back to products</Link>
          <h1>single product: {title}</h1>
      </div>
      <section className="single-product">
         <article>
            <Image fixed={fixed} alt={title}></Image>
         </article>
         <article>
            <h1>{title}</h1> 
            <h3>${price}</h3>
            <p>{info}</p>
            <button>add to cart</button>
        </article>
      </section>
    </Layout>
    )
}

export const query = graphql`
  
    query GetSingleProducts($slug: String){
        products: contentfulProduct(slug: {eq: $slug}) {
            price
            title
            image {
              fixed(width: 300) {
               ...GatsbyContentfulFixed
              }
            }
            info {
              info
            }
          }
        }
    
  
`

export default ComponentName
