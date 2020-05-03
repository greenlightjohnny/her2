import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { remarkForm, liveRemarkForm } from "gatsby-tinacms-remark"
import Sect from "../components/layout.module.scss"
import Title from "../components/seo"
import { Button as TinaButton } from "@tinacms/styles"
import { Wysiwyg } from "@tinacms/fields"
import { TinaField } from "tinacms"

class Whatis extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const { isEditing, setIsEditing } = this.props
    //const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        {process.env.NODE_ENV !== "production" && (
          <TinaButton primary onClick={() => setIsEditing(p => !p)}>
            {isEditing ? "Preview" : "Edit"}
          </TinaButton>
        )}
        <Title title="About HER2.ME" />

        <div className={Sect.mcon}>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
            <section
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            ></section>
          </TinaField>
        </div>
      </Layout>
    )
  }
}

const BlogPostForm = {
  /**
   * The list of fields tell us what the form looks like.
   */
  fields: [
    /**
     * This is a field definition. There are many types of
     * components available, including:
     *
     * * text
     * * textarea
     * * toggle
     * * date
     * * markdown
     * * color
     * * group
     * * group-list
     * * blocks
     */
    {
      //
      name: "frontmatter.title",
      component: "text",
      label: "Title",
      required: true,
    },
    { name: "frontmatter.date", component: "date", label: "Date" },
    {
      name: "frontmatter.description",
      component: "textarea",
      label: "Textarea",
    },
    { name: "rawMarkdownBody", component: "markdown", label: "Body" },
  ],
}

export default liveRemarkForm(Whatis, BlogPostForm)
export const query = graphql`
  query MyQuery8 {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
      fileRelativePath: { eq: "/content/assets/pagesmd/whatis.md" }
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
