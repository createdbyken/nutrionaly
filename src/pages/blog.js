import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchPosts from "../components/searchPosts"

class Blog extends React.Component {
	render() {
		const { data, navigate, location } = this.props
		const siteTitle = data.site.siteMetadata.title
		const posts = data.allMdx.edges
		const localSearchBlog = data.localSearchBlog

		return (
		<>
			<Header></Header>
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title="All posts" />
				<SearchPosts
          posts={posts}
					localSearchBlog={localSearchBlog}
					navigate={navigate}
					location={location}
				/>
			</Layout>
		</>
		)
  	}
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
