import * as React from "react";
import { graphql, PageProps } from "gatsby";

export const query = graphql`
  query TopPage {
    allMicrocmsBlogs {
      edges {
        node {
          body
          id
          thumbnail {
            url
          }
          title
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
          <li key={node.id}>
            {node?.title && <p>{node.title}</p>}
            {node?.thumbnail?.url && (
              <img width={480} src={node.thumbnail.url} alt={node.title} />
            )}
            {node?.body && (
              <p dangerouslySetInnerHTML={{ __html: node.body }} />
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
