import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import style from "./blog.module.scss"

const Blog: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const postsData = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={style.posts}>
        {postsData.map((post: any, index: number) => {
          return (
            <li key={index} className={style.post}>
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
              <p>
                <Link to={"blog/" + post.node.fields.slug}>Read</Link>
              </p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
