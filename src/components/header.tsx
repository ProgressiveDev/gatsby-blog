import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import style from "./header.module.scss"

interface Metadata {
    site: SiteMetadata
}

interface SiteMetadata {
  siteMetadata: {
    title: string
  }
}

const Header: React.FC = () => {
  const data: Metadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)

  return (
    <div className={style.header}>
      <h1>
        <Link className={style.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={style.navList}>
          <li>
            <Link
              className={style.navItem}
              activeClassName={style.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={style.navItem}
              activeClassName={style.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={style.navItem}
              activeClassName={style.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={style.navItem}
              activeClassName={style.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
