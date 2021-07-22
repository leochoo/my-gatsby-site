import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import {MDXRenderer} from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <Link to={node.slug}>
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        </Link>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        slug
      }
    }
  }
`;

export default BlogPage;
