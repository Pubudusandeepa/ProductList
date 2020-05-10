import React from 'react'
import { useStaticQuery, graphql} from "gatsby"
const getData = graphql`
{
    site {
       info: siteMetadata {
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
const Header = () => {
    const {site:{info:{title,data, person:{name}}}} = useStaticQuery(getData);
    console.log(data)
    return (
        <div>
            <h1>title: {title}</h1>
            <h1>name: {name}</h1>
        </div>
    )
}

export default Header
