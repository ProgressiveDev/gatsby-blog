import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Metadata } from "./types"
import style from "./footer.module.scss"

const Footer: React.FC = () => {
  const data: Metadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return <div className={style.footer}>Created by {data.site.siteMetadata.author}, © 2020</div>
}

export default Footer;
