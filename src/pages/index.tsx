import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { Card } from "../components/Card";
import { css } from "@emotion/react";

const container = css`
  max-width: 1024px;
  margin: 0 auto;
`;

const grid = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
`;

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
    <main css={container}>
      <ul css={grid}>
        {data.allMicrocmsBlogs.edges.map(({ node }) => (
          <li key={node.blogsId}>
            <Card
              title={node?.title ?? ""}
              src={node?.thumbnail?.url ?? ""}
              to={node.blogsId ?? "/"}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
