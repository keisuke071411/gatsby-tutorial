import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";

export const query = graphql`
  query TopPage {
    allMicrocmsBlogs {
      edges {
        node {
          body
          thumbnail {
            url
          }
          title
          blogsId
        }
      }
    }
  }
`;

// markup
const IndexPage = ({ data }: PageProps<GatsbyTypes.TopPageQuery>) => {
  return (
    <main>
      <p>hello gatsby</p>
      <ul>
        {data.allMicrocmsBlogs.edges.map(({ node }) => (
          <li key={node.blogsId}>
            <Link to={node.blogsId ?? "/"}>
              {node?.title && <p>{node.title}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
