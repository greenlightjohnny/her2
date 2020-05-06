import React from "react"
import { Link, graphql } from "gatsby"
import { remarkForm, liveRemarkForm } from "gatsby-tinacms-remark"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Sect from "../components/layout.module.scss"
import { Button as TinaButton } from "@tinacms/styles"
import { Wysiwyg } from "@tinacms/fields"
import { TinaField } from "tinacms"
import Style from "./blog.module.scss"
import SciPhoto from "../../content/assets/sci.svg"

class BlogPosts extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { isEditing, setIsEditing } = this.props

    return (
      <Layout location={this.props.location} title={siteTitle}>
        {process.env.NODE_ENV !== "production" && (
          <TinaButton primary onClick={() => setIsEditing(p => !p)}>
            {isEditing ? "Preview" : "Edit"}
          </TinaButton>
        )}
        <div className={Style.leftc}>
          <h1>Latest Posts</h1>
        </div>
        <div className={Style.mcon}>
          <SEO title="All posts" />
          <TinaField name="rawMarkdownBody" Component={Wysiwyg}></TinaField>
          {posts.map(({ node }) => {
            console.log(node.frontmatter.thumbnail)
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article className={Style.blogp} key={node.fields.slug}>
                <img src={node.frontmatter.thumbnail} />
                <header>
                  <h3
                    style={
                      {
                        // marginBottom: rhythm(1 / 4),
                      }
                    }
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default remarkForm(BlogPosts)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
          }
          rawFrontmatter
        }
      }
    }

    markdownRemark(
      fileRelativePath: { eq: "/content/blog/testing/traditional.md" }
    ) {
      id
      frontmatter {
        title
      }
      html
      ...TinaRemark
    }
  }
`
