import React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import { rhythm, scale } from "../utils/typography"
import { withPlugin } from "tinacms"
import { createRemarkButton } from "gatsby-tinacms-remark"
import slugify from "slugify"
import Sect from "./layout.module.scss"
import Logo from "../../content/assets/gatslogo.svg"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <h3 className={Sect.hone}>
            <Link className={Sect.link1} to={`/`}>
              {title}
            </Link>
          </h3>
          <ul className={Sect.block}>
            <li>
              <Link className={Sect.link1} to={`/blogposts`}>
                Latest
              </Link>
            </li>

            <li>
              <Link className={Sect.link1} to={`/contact`}>
                Contact
              </Link>
            </li>
            <li>
              <Link className={Sect.link1} to={`/about`}>
                About
              </Link>
            </li>
          </ul>
        </>
      )
    } else {
      header = (
        <>
          <h3 className={Sect.hone}>
            <Link className={Sect.link1} to={`/`}>
              {title}
            </Link>
          </h3>
          <ul className={Sect.block}>
            <li>
              <Link className={Sect.link1} to={`/blogposts`}>
                Latest
              </Link>
            </li>

            <li>
              <Link className={Sect.link1} to={`/contact`}>
                Contact
              </Link>
            </li>
            <li>
              <Link className={Sect.link1} to={`/about`}>
                About
              </Link>
            </li>
          </ul>
        </>

        //   <h3
        //     style={{
        //       fontFamily: `Montserrat, sans-serif`,
        //       marginTop: 0,
        //     }}
        //   >
        //     <Link
        //       style={{
        //         boxShadow: `none`,
        //         textDecoration: `none`,
        //         color: `inherit`,
        //       }}
        //       to={`/`}
        //     >
        //       {title}
        //     </Link>
        //   </h3>
        //
      )
    }
    return (
      <div className={Sect.large}>
        {/* <header className={Sect.header}>{header}</header> */}
        <Navbar />
        <div
          className={Sect.container}
          // style={{
          //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          // }}
        ></div>
        <main>{children}</main>
        <div className={Sect.ftop}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 90">
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M0 .006h1600v34.122c-31.386-5.203-63.646-7.36-96.781-6.468-49.703 1.336-43.94 13.542-98.316 11.714-54.375-1.827-41.641-13.206-97.392-11.714-55.751 1.49-42.592 15.424-103.655 11.714-61.064-3.709-46.406-18.682-101.077-17.226-54.672 1.455-44.173 19.052-99.878 17.226-55.705-1.825-45.654-13.167-100.271-11.714-54.618 1.452-44.782 15.137-99.889 11.714-55.106-3.423-44.138-18.584-95.603-17.226-51.464 1.358-52.23 19.019-105.967 17.226-53.737-1.792-44.763-11.714-95.098-11.714S449.37 37.457 400 34.128c-49.37-3.33-27.666-11.98-77.666-11.98S258.348 37.624 200 34.128c-58.348-3.497-49.912-11.98-99.93-11.98-33.345 0-66.702 3.993-100.07 11.98V.006z"
            ></path>
          </svg>
        </div>
        <footer className={Sect.footer}>
          © {new Date().getFullYear()}, all rights reserved
          {` `}
          <div>
            <p>Happily created using: </p>
            <img className={Sect.footerlogo} src={Logo}></img>
          </div>
        </footer>
      </div>
    )
  }
}

/**
 * This a is `create-content` plugin. It describes
 * a form for creating blog posts as as markdown files.
 * Registering this plugin reveals the `+` button in
 * the sidebar.
 */
const CreatePostPlugin = createRemarkButton({
  /**
   * Clicking the `+` button reveals a lost of content
   * types that can be created. This field sets the
   * label in that list.
   */
  label: "Post",
  /**
   * Clicking the `Post` in the `+` list opens a modal.
   * This modal contains a form with these fields.
   */
  fields: [{ name: "title", component: "text", label: "Title" }],
  /**
   * Tina needs to know where the new markdown file is
   * going to live. This `filename` function generates
   * that path from the form's values. This function is required.
   */
  filename(form) {
    let slug = slugify(form.title.toLowerCase())

    return `content/blog/${slug}/index.md`
  },
  /**
   * We can optionally generate default frontmatter for the
   * new post. This can be a combination of form data and
   * programmatically generated.
   */
  frontmatter(form) {
    return {
      title: form.title,
      date: new Date(),
      description: "",
    }
  },
  /**
   * Finally, we can generate a default body. Right now
   * we don't need to do that.
   */
  body(form) {
    return ""
  },
})

/**
 * Our `CreatePostPlugin` will be available any time the
 * `Layout` component is rendered in the site.
 */
export default withPlugin(Layout, CreatePostPlugin)
